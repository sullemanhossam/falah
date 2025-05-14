import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("milestones").collect();
  },
});

export const createMilestone = mutation({
  args: {
    study_id: v.string(),
    title: v.string(),
    due_date: v.string(),
    is_completed: v.string()
},
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("milestones", {
      study_id: args.study_id,
      title: args.title,
      due_date: args.due_date,
      is_completed: args.is_completed,
    });
  },
});