import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("profile").collect();
  },
});

export const createProfile = mutation({
  args: {
    userId: v.string(),
    fullName: v.string(),
    organization: v.string(),
    location: v.string(),
    phone: v.string(),
    expertise: v.string(),
    fee_structure: v.string()
},
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("profile", {
      userId: args.userId,
      fullName: args.fullName,
      organization: args.organization,
      location: args.location,
      phone: args.phone,
      expertise: args.expertise,
      fee_structure: args.fee_structure,
      created_at: Date.now(),
    });
  },
});