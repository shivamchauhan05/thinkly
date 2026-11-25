import express from "express";
import Post from "../models/Post.js";
import { authRequired } from "../middleware/auth.js";

const router = express.Router();

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);
}

function cleanContent(content) {
  if (!Array.isArray(content)) return [];
  return content
    .filter((block) => block && typeof block === "object")
    .map((block) => {
      const type = ["paragraph", "heading", "quote", "list"].includes(block.type)
        ? block.type
        : "paragraph";
      if (type === "list") {
        return {
          type,
          items: Array.isArray(block.items)
            ? block.items.map((item) => String(item)).filter(Boolean)
            : [],
        };
      }
      return { type, text: String(block.text || "") };
    })
    .filter((block) => (block.type === "list" ? block.items.length : block.text));
}

function today() {
  return new Date().toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

router.get("/", async (req, res) => {
  try {
    const query = { published: true };
    if (req.query.category && req.query.category !== "All") {
      query.category = String(req.query.category);
    }
    if (req.query.q) {
      const q = String(req.query.q);
      query.$or = [
        { title: { $regex: q, $options: "i" } },
        { excerpt: { $regex: q, $options: "i" } },
      ];
    }
    const posts = await Post.find(query).sort({ featured: -1, createdAt: -1 }).lean();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error: error.message });
  }
});

router.get("/admin", authRequired, async (_req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch posts", error: error.message });
  }
});

router.get("/admin/:id", authRequired, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id).lean();
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
});

router.get("/:slug", async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug, published: true }).lean();
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
});

router.post("/", authRequired, async (req, res) => {
  try {
    const body = req.body || {};
    if (!body.title || !String(body.title).trim()) {
      return res.status(400).json({ message: "Title is required" });
    }

    let slug = slugify(body.slug || body.title);
    if (!slug) slug = `post-${Date.now()}`;
    if (await Post.exists({ slug })) slug = `${slug}-${Date.now().toString(36)}`;

    const post = await Post.create({
      slug,
      title: String(body.title).trim(),
      excerpt: String(body.excerpt || ""),
      image: String(body.image || "/build.jpg"),
      category: String(body.category || "Website"),
      date: String(body.date || today()),
      readTime: String(body.readTime || "5 min read"),
      featured: Boolean(body.featured),
      published: body.published !== false,
      author: String(body.author || "Thinklyedu"),
      service: {
        label: String(body.service?.label || ""),
        href: String(body.service?.href || ""),
      },
      content: cleanContent(body.content),
    });

    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to save post", error: error.message });
  }
});

router.put("/:id", authRequired, async (req, res) => {
  try {
    const body = req.body || {};
    if (body.title !== undefined && !String(body.title).trim()) {
      return res.status(400).json({ message: "Title cannot be empty" });
    }

    const update = {};
    for (const key of [
      "title",
      "excerpt",
      "image",
      "category",
      "date",
      "readTime",
      "author",
      "featured",
      "published",
    ]) {
      if (body[key] !== undefined) update[key] = body[key];
    }
    if (body.service !== undefined) {
      update.service = {
        label: String(body.service?.label || ""),
        href: String(body.service?.href || ""),
      };
    }
    if (body.content !== undefined) update.content = cleanContent(body.content);
    if (body.slug && slugify(body.slug)) {
      const nextSlug = slugify(body.slug);
      const clash = await Post.exists({ slug: nextSlug, _id: { $ne: req.params.id } });
      if (clash) {
        return res.status(409).json({ message: "This slug is already in use" });
      }
      update.slug = nextSlug;
    }

    const post = await Post.findByIdAndUpdate(req.params.id, update, {
      new: true,
      runValidators: true,
    });
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Failed to update post", error: error.message });
  }
});

router.delete("/:id", authRequired, async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted successfully" });
  } catch {
    res.status(404).json({ message: "Post not found" });
  }
});

export default router;
