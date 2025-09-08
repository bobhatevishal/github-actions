import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "Hello from professional webapp 👋",
    version: process.env.APP_VERSION || "1.0.0",
    time: new Date().toISOString(),
  });
});

export default router;
