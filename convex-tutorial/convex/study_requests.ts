import { query } from "./_generated/server";
import { getUser } from "./functions/user";

// user should be able to query their organisations study request
// ones they have made only

export const getOurStudyRequests = query({
  args: {},
  handler: async (ctx) => {
    try {
      // get the user
      const user = await getUser(ctx);
      console.log("User:", user);

      if (!user || !user.organizationId) {
        console.error("Missing user or organizationId");
        return null;
      }

      // fetch study_requests for the user's organization
      const orgRequests = await ctx.db
        .query("study_requests")
        .withIndex("by_organizationId", (q) =>
          q.eq("organizationId", user.organizationId),
        )
        .collect();

      console.log("Fetched Org Requests:", orgRequests);
      return orgRequests;
    } catch (err) {
      console.error("Error in handler:", err);
      return null;
    }
  },
});

export const createStudyRequest = mutation({
  args: {
    name: v.string(),
    type: v.string(),
    companySize: v.string(),
  },
  handler: async (ctx, args) => {
    // Enforce unique organization name
    const existing = await ctx.db
      .query("organizations")
      .withIndex("name", (q) => q.eq("name", args.name))
      .first();

    if (existing) {
      throw new Error(`Organization with name "${args.name}" already exists.`);
    } else {
      // Create the new organization
      const organizationId = await ctx.db.insert("organizations", {
        name: args.name,
        type: args.type,
        companySize: args.companySize,
      });
      // Get current user's ID
      const userId = await getUserId(ctx);

      // Update user with admin role and organization ID
      await ctx.db.patch(userId, {
        role: "admin",
        organizationId,
      });

      return organizationId;
    }
  },
});
