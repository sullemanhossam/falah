import { getAuthUserId } from "@convex-dev/auth/server";
import { query } from "../_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (userId === null) {
      return null;
    }
    const result = await ctx.db
      .query("employees")
      .filter((q) => q.eq(q.field("userId"), userId))
      .unique(); 
  },
});