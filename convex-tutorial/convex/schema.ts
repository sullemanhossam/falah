import { defineSchema, defineTable } from "convex/server";
import { authTables } from "@convex-dev/auth/server";
import { v } from "convex/values";

const schema = defineSchema({
  ...authTables,
  study_requests: defineTable({
    createdBy: v.string(),
    croId: v.string(),
    sponsorId: v.string(),
    title: v.string(),
    description: v.string(),
    status: v.string(),
  }),
  proposals: defineTable({
    studyRequestId: v.string(),
    cro_id: v.string(),
    submitted_by: v.string(),
    status: v.string(),
  }),
  organizations: defineTable({
    name: v.string(),
    type: v.string(),
    description: v.string(),
    // updated_at: v.string(),
  }),
  milestones: defineTable({
    study_id: v.string(),
    title: v.string(),
    is_completed: v.string(),
  }),
  // Your other tables...
});

export default schema;
