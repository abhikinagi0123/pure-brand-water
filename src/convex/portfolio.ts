import { v } from "convex/values";
import { query } from "./_generated/server";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("portfolioItems").order("desc").collect();
  },
});

export const getByIndustry = query({
  args: { industry: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("portfolioItems")
      .withIndex("by_industry", (q) => q.eq("industry", args.industry))
      .collect();
  },
});
