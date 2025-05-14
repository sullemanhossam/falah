import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const createProposal = mutation({
  args: {
    study_id: v.string(),
    submitted_by: v.string(),
    fee_details: v.string(),
    timeline_weeks: v.string(),
    payment_terms: v.string(),
    status: v.string(),
    created_at: v.string()
},
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("trials", {
      user: args.user,
      body: args.body,
    });
  },
});