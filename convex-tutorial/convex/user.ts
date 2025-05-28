import { mutation, query } from "./_generated/server";
import { getUserId } from "./functions/user";

export const getCurrentUser = query(async (ctx) => {
  const userId = await getUserId(ctx);
  // turn the userId string into a validID for a table
  const userDocId = ctx.db.normalizeId("users", userId);
  if (userDocId === null) {
    return null; // Prevent passing null into ctx.db.get
  }

  // search tables for id unique to the userID
  return await ctx.db.get(userDocId);
});
