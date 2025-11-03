import { authTables } from "@convex-dev/auth/server";
import { defineSchema, defineTable } from "convex/server";
import { Infer, v } from "convex/values";

export const ROLES = {
  ADMIN: "admin",
  USER: "user",
  MEMBER: "member",
} as const;

export const roleValidator = v.union(
  v.literal(ROLES.ADMIN),
  v.literal(ROLES.USER),
  v.literal(ROLES.MEMBER),
);
export type Role = Infer<typeof roleValidator>;

const schema = defineSchema(
  {
    ...authTables,

    users: defineTable({
      name: v.optional(v.string()),
      image: v.optional(v.string()),
      email: v.optional(v.string()),
      emailVerificationTime: v.optional(v.number()),
      isAnonymous: v.optional(v.boolean()),
      role: v.optional(roleValidator),
    }).index("email", ["email"]),

    quotes: defineTable({
      name: v.string(),
      companyName: v.string(),
      email: v.string(),
      phone: v.string(),
      quantity: v.string(),
      bottleType: v.string(),
      message: v.optional(v.string()),
      status: v.string(), // "pending", "contacted", "completed"
      userId: v.optional(v.id("users")),
    }).index("by_email", ["email"])
      .index("by_status", ["status"]),

    customizations: defineTable({
      userId: v.optional(v.id("users")),
      bottleType: v.string(),
      bottleColor: v.optional(v.string()),
      labelFinish: v.string(), // "gloss" or "matte"
      logoUrl: v.optional(v.string()),
      qrCode: v.boolean(),
      personalizedMessage: v.optional(v.string()),
      capColor: v.optional(v.string()),
      email: v.string(),
      name: v.string(),
    }).index("by_user", ["userId"])
      .index("by_email", ["email"]),

    testimonials: defineTable({
      name: v.string(),
      company: v.string(),
      role: v.string(),
      content: v.string(),
      rating: v.number(),
      imageUrl: v.optional(v.string()),
      featured: v.boolean(),
    }).index("by_featured", ["featured"]),

    blogPosts: defineTable({
      title: v.string(),
      slug: v.string(),
      excerpt: v.string(),
      content: v.string(),
      author: v.string(),
      category: v.string(),
      imageUrl: v.string(),
      published: v.boolean(),
      publishedAt: v.optional(v.number()),
    }).index("by_slug", ["slug"])
      .index("by_published", ["published"])
      .index("by_category", ["category"]),

    portfolioItems: defineTable({
      brandName: v.string(),
      industry: v.string(), // "corporate", "events", "hotels", "retail"
      imageUrl: v.string(),
      description: v.string(),
      testimonial: v.optional(v.string()),
    }).index("by_industry", ["industry"]),

    newsletter: defineTable({
      email: v.string(),
      subscribed: v.boolean(),
    }).index("by_email", ["email"]),
  },
  {
    schemaValidation: false,
  },
);

export default schema;