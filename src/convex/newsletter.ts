import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const subscribe = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("newsletter")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      if (!existing.subscribed) {
        await ctx.db.patch(existing._id, { subscribed: true });
      }
      return existing._id;
    }

    return await ctx.db.insert("newsletter", {
      email: args.email,
      subscribed: true,
    });
  },
});
