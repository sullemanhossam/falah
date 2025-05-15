import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("organizations").collect();
  },
});

export const createOrganization = mutation({
  args: {
    name: v.string(),
    type: v.string(),
    companySize: v.string(),
    adminId: v.id("users"), // ✅ references the `users` table
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    
    await ctx.db.insert("organizations", {
      name: args.name,
      type: args.type,
      companySize: args.companySize,
      adminId: args.adminId, // ✅ stores reference
    });
  },
});