import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || "1.0.0";

app.use(express.json());

// Basic logging
app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const ms = Date.now() - start;
    console.log(
      `${req.method} ${req.url} -> ${res.statusCode} ${ms}ms`
    );
  });
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({
    message: "Hello from simple-webapp 👋",
    version: VERSION,
    time: new Date().toISOString()
  });
});

app.get("/healthz", (req, res) => res.status(200).send("ok"));
app.get("/readyz", (req, res) => res.status(200).send("ready"));

// Start server
const server = app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Graceful shutdown
const shutdown = (signal) => {
  console.log(`Received ${signal}. Shutting down gracefully...`);
  server.close(() => {
    console.log("HTTP server closed.");
    process.exit(0);
  });

  // Force exit if not closed in time
  setTimeout(() => process.exit(1), 10_000).unref();
};

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));

