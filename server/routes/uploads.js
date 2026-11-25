import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { authRequired } from "../middleware/auth.js";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    if (!file.mimetype.startsWith("image/")) {
      return cb(new Error("Only image files are allowed"));
    }
    cb(null, true);
  },
});

const router = express.Router();

router.post("/", authRequired, upload.single("file"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "Image file required" });
    }

    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return res.status(500).json({ message: "Cloudinary is not configured on the server" });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "thinkly/blog",
          resource_type: "image",
          transformation: [{ width: 1800, crop: "limit" }],
        },
        (error, data) => (error ? reject(error) : resolve(data)),
      );
      stream.end(req.file.buffer);
    });

    return res.json({ secureUrl: result.secure_url, publicId: result.public_id });
  } catch (error) {
    return res.status(500).json({ message: error.message || "Upload failed" });
  }
});

router.use((error, _req, res, _next) => {
  res.status(error.status || 400).json({ message: error.message || "Upload failed" });
});

export default router;
