import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema(
  {
    label: { type: String, default: "" },
    href: { type: String, default: "" },
  },
  { _id: false },
);

const postSchema = new mongoose.Schema(
  {
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, default: "" },
    image: { type: String, default: "/build.jpg" },
    category: { type: String, default: "Website" },
    date: { type: String, default: "" },
    readTime: { type: String, default: "5 min read" },
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    author: { type: String, default: "Thinklyedu" },
    service: { type: serviceSchema, default: { label: "", href: "" } },
    content: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
  },
  { timestamps: true },
);

postSchema.index({ category: 1, published: 1 });

export default mongoose.models.Post || mongoose.model("Post", postSchema);
