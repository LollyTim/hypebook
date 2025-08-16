import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const addToWaitlist = mutation({
  args: { email: v.string() },
  handler: async (ctx, args) => {
    const { email } = args;
    const joinedAt = Date.now();

    // Check if email already exists
    const existing = await ctx.db
      .query("waitlist")
      .withIndex("by_email", (q) => q.eq("email", email))
      .first();

    if (existing) {
      throw new Error("Email already registered for waitlist");
    }

    // Add the email to the waitlist
    await ctx.db.insert("waitlist", { email, joinedAt });

    return { success: true };
  },
});

export const getAllWaitlistEmails = query({
  args: {},
  handler: async (ctx) => {
    const emails = await ctx.db.query("waitlist").order("desc").collect();

    return emails;
  },
});
