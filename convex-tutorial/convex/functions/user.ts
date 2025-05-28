export async function getUserId(ctx: any) {
  // get the userIdentity
  const identity = await ctx.auth.getUserIdentity();
  if (identity === null) {
    return null;
  }

  // console.log(identity);

  // split the token into UserId and token
  const parts = identity.subject.split("|");
  if (parts.length < 2) {
    console.error("Invalid identity.subject format");
    return null;
  }

  // console.log("First part:", parts[0]);
  // console.log("Second part:", parts[1]);
  const userId = parts[0];
  return userId;
}

export async function getUser(ctx: any) {
  const userId = await getUserId(ctx);
  // turn the userId string into a validID for a table
  const userDocId = ctx.db.normalizeId("users", userId);
  if (userDocId === null) {
    return null; // Prevent passing null into ctx.db.get
  }

  // search tables for id unique to the userID
  return await ctx.db.get(userDocId);
}
