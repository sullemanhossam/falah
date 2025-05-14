import { mutation } from "./_generated/server";
import { v } from "convex/values";

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
    await ctx.db.insert("trials", {
      user: args.user,
      body: args.body,
    });
  },
});