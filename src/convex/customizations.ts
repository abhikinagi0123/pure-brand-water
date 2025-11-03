import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { getAuthUserId } from "@convex-dev/auth/server";

export const create = mutation({
  args: {
    bottleType: v.string(),
    bottleColor: v.optional(v.string()),
    labelFinish: v.string(),
    logoUrl: v.optional(v.string()),
    qrCode: v.boolean(),
    personalizedMessage: v.optional(v.string()),
    capColor: v.optional(v.string()),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    
    const customizationId = await ctx.db.insert("customizations", {
      ...args,
      userId: userId || undefined,
    });

    return customizationId;
  },
});

export const listByUser = query({
  args: {},
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) return [];
    
    return await ctx.db
      .query("customizations")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .order("desc")
      .collect();
  },
});
