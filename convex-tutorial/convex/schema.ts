import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  users: defineTable({
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    emailVerificationTime: v.optional(v.number()),
    phone: v.optional(v.string()),
    phoneVerificationTime: v.optional(v.number()),
    isAnonymous: v.optional(v.boolean()),
    // other "users" fields...
    role: v.optional(v.string()),
    organizationId: v.optional(v.string()),
  }).index("email", ["email"]),
  organizations: defineTable({
    name: v.string(),
    type: v.string(),
    companySize: v.string(),
    // updated_at: v.string(),
  }).index("name", ["name"])
  // Your othe
  // r tables...
});

export default schema;
