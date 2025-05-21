import { v } from "convex/values";
import { mutation } from "./_generated/server";

// export const get = query({
//   args: {},
//   handler: async (ctx) => {
//     return await ctx.db.query("organizations").collect();
//   },
// });

export const createOrganization = mutation({
  args: {
    name: v.string(),
    type: v.string(),
    companySize: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("This TypeScript function is running on the server.");
    
    await ctx.db.insert("organizations", {
      name: args.name,
      type: args.type,
      companySize: args.companySize,
    });
    // 
    // setting custom claims for the user a role and a orgid as the newly created org
 
  },
});