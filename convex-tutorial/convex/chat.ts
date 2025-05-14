import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("messages").collect();
  },
});

export const sendMessage = mutation({
  args: {
    user: v.string(),
    body: v.string(),
    receiver_id: v.string(),
    study_id: v.string(),
    sent_at: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    await ctx.db.insert("messages", {
      user: args.user,
      body: args.body,
      receiver_id: args.body,
      study_id: args.body,
      sent_at: args.body,
    });
  },
});