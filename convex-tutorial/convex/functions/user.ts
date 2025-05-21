import { getUserId } from "./getUserId";

export async function getUser(ctx:any){
    const userId = await getUserId(ctx)
      // turn the userId string into a validID for a table
      const userDocId = ctx.db.normalizeId("users", userId);
      if (userDocId === null) {
        return null; // Prevent passing null into ctx.db.get
      }
    
      // search tables for id unique to the userID
      return await ctx.db.get(userDocId);
}