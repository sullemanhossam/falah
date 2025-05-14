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
    description: v.string(),
    headquaters: v.string(),
    website: v.string(),
    contact_email: v.string(),
    phone: v.string(),
    created_at: v.string(),
    // updated_at: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("organizations", {
      name: args.name,
      type: args.type,
      description: args.description,
      headquaters: args.headquaters,
      website: args.website,
      contact_email: args.contact_email,
      phone: args.phone,
      created_at: Date.now(),
    });
  },
});