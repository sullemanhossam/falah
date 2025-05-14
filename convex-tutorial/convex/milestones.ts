import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createMilestone = mutation({
  args: {
    study_id: v.string(),
    title: v.string(),
    due_date: v.string(),
    is_completed: v.string()
},
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("trials", {
      user: args.user,
      body: args.body,
    });
  },
});