import { mutation, query } from "../_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("study_requests").collect();
  },
});

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
    // await ctx.db.insert("study_requests", {
    //   user: args.user,
    //   sponsor_id: args.sponsor_id,
    //   title: args.title,
    //   description: args.description,
    //   therapeutic_areas: args.therapeutic_areas,
    //   region: args.region,
    //   status: args.status,
    // });
  },
});
