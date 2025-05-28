import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getUser, getUserId } from "./functions/user";

export const get = query({
  args: {},
  handler: async (ctx) => {
    try {
      const user = await getUser(ctx);
      console.log("User:", user);

      if (!user || !user.organizationId) {
        console.error("Missing user or organizationId");
        return null;
      }

      const organizationDocId = ctx.db.normalizeId(
        "organizations",
        user.organizationId,
      );
      console.log("Normalized Org ID:", organizationDocId);

      if (!organizationDocId) {
        console.error("Failed to normalize organization ID");
        return null;
      }

      const org = await ctx.db.get(organizationDocId);
      console.log("Fetched Org:", org);
      return org;
    } catch (err) {
      console.error("Error in handler:", err);
      return null;
    }
  },
});

export const createOrganization = mutation({
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
