import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { getUserId } from "./functions/getUserId";

// export const get = query({
//   args: {},
//   handler: async (ctx) => {
//     return await ctx.db.query("organizations").collect();
//   },
// });

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