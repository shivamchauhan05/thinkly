import "dotenv/config";
import mongoose from "mongoose";
import Admin from "../models/Admin.js";
import Post from "../models/Post.js";
import { POSTS } from "../../src/lib/blog-data.js";

async function seed() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI missing. Set it in server/.env.");
  }
  await mongoose.connect(process.env.MONGODB_URI);

  const email = process.env.ADMIN_EMAIL || "admin@thinklyedu.com";
  const password = process.env.ADMIN_PASSWORD || "admin12345";

  let admin = await Admin.findOne({ email });
  if (!admin) {
    admin = await Admin.create({ email, password });
    console.log(`Admin created: ${email}`);
  } else {
    console.log(`Admin already exists: ${email}`);
  }

  let created = 0;
  let updated = 0;
  for (const post of POSTS) {
    const result = await Post.updateOne(
      { slug: post.slug },
      { $set: { ...post, published: true, author: post.author || "Thinklyedu" } },
      { upsert: true },
    );
    if (result.upsertedCount) created += 1;
    else updated += 1;
  }

  console.log(`Seed complete: ${created} new posts, ${updated} existing posts updated.`);
  await mongoose.disconnect();
}

seed().catch(async (error) => {
  console.error("Seed failed:", error.message);
  await mongoose.disconnect();
  process.exit(1);
});
