import { time } from "console";
import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("proposals").collect();
  },
});

export const createProposal = mutation({
  args: {
    study_id: v.string(),
    submitted_by: v.string(),
    fee_details: v.string(),
    timeline_weeks: v.string(),
    payment_terms: v.string(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    // await ctx.db.insert("proposals", {
    //   study_id: args.study_id,
    //   submitted_by: args.submitted_by,
    //   fee_details: args.fee_details,
    //   timeline_weeks: args.timeline_weeks,
    //   payment_terms: args.payment_terms,
    //   status: args.status,
    // });
  },
});
