import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createStudyRequest = mutation({
  args: {
    user: v.string(),
    sponsor_id: v.string(),
    title: v.string(),
    description: v.string(),
    therapeutic_areas: v.string(),
    region: v.string(),
    status: v.string(),
    created_at: v.string(),
},
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("trials", {
      user: args.user,
      body: args.body,
    });
  },
});