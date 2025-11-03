import { internalMutation } from "./_generated/server";

export const addTestimonials = internalMutation({
  args: {},
  handler: async (ctx) => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        company: "TechCorp Inc",
        role: "Marketing Director",
        content: "OnePureDrop transformed our corporate events with beautifully branded bottles. The quality exceeded our expectations!",
        rating: 5,
        featured: true,
      },
      {
        name: "Michael Chen",
        company: "Luxury Hotels Group",
        role: "Operations Manager",
        content: "Our guests love the premium glass bottles in their rooms. It's become a signature part of our brand experience.",
        rating: 5,
        featured: true,
      },
      {
        name: "Emily Rodriguez",
        company: "FitLife Gyms",
        role: "Brand Manager",
        content: "The aluminum bottles are perfect for our members. Durable, eco-friendly, and our logo looks amazing on them!",
        rating: 5,
        featured: true,
      },
    ];

    for (const testimonial of testimonials) {
      await ctx.db.insert("testimonials", testimonial);
    }
  },
});

export const addBlogPosts = internalMutation({
  args: {},
  handler: async (ctx) => {
    const posts = [
      {
        title: "The Ultimate Guide to Custom Branded Water Bottles",
        slug: "ultimate-guide-custom-branded-water-bottles",
        excerpt: "Everything you need to know about creating the perfect branded water bottles for your business.",
        content: "Full content here...",
        author: "OnePureDrop Team",
        category: "guides",
        imageUrl: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
        published: true,
        publishedAt: Date.now() - 7 * 24 * 60 * 60 * 1000,
      },
      {
        title: "5 Ways Custom Water Bottles Boost Brand Awareness",
        slug: "custom-water-bottles-boost-brand-awareness",
        excerpt: "Discover how branded water bottles can significantly increase your brand visibility and customer engagement.",
        content: "Full content here...",
        author: "Marketing Team",
        category: "marketing",
        imageUrl: "https://images.unsplash.com/photo-1550223640-23097fc71cb2",
        published: true,
        publishedAt: Date.now() - 14 * 24 * 60 * 60 * 1000,
      },
      {
        title: "Sustainability in Water Bottle Production",
        slug: "sustainability-water-bottle-production",
        excerpt: "Learn about our eco-friendly practices and commitment to reducing environmental impact.",
        content: "Full content here...",
        author: "Sustainability Team",
        category: "sustainability",
        imageUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b",
        published: true,
        publishedAt: Date.now() - 21 * 24 * 60 * 60 * 1000,
      },
    ];

    for (const post of posts) {
      await ctx.db.insert("blogPosts", post);
    }
  },
});

export const addPortfolioItems = internalMutation({
  args: {},
  handler: async (ctx) => {
    const items = [
      {
        brandName: "TechCorp Annual Conference 2024",
        industry: "corporate",
        imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        description: "Custom PET bottles with full-color logo printing for 5,000 attendees",
        testimonial: "Perfect for our event! Everyone loved them.",
      },
      {
        brandName: "Grand Plaza Hotel",
        industry: "hotels",
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        description: "Premium glass bottles with elegant labeling for luxury suites",
      },
      {
        brandName: "FitLife Gym Chain",
        industry: "retail",
        imageUrl: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
        description: "Durable aluminum bottles for retail and member rewards program",
      },
      {
        brandName: "Summer Music Festival 2024",
        industry: "events",
        imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
        description: "Eco-friendly bottles with vibrant festival branding",
        testimonial: "Sustainable and stylish - exactly what we needed!",
      },
      {
        brandName: "Corporate Wellness Initiative",
        industry: "corporate",
        imageUrl: "https://images.unsplash.com/photo-1523362628745-0c100150b504",
        description: "Motivational message bottles for employee wellness program",
      },
      {
        brandName: "Boutique Retail Launch",
        industry: "retail",
        imageUrl: "https://images.unsplash.com/photo-1602143407151-7111542de6e8",
        description: "Limited edition bottles for product launch campaign",
      },
    ];

    for (const item of items) {
      await ctx.db.insert("portfolioItems", item);
    }
  },
});
