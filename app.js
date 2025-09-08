import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || "1.0.0";

app.use(express.json());

// UI route
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Simple WebApp Dashboard</title>
      <style>
        body {
          margin: 0;
          font-family: "Segoe UI", Roboto, Arial, sans-serif;
          background: linear-gradient(135deg, #74ebd5 0%, #ACB6E5 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          color: #2c3e50;
        }
        .card {
          background: #fff;
          padding: 2rem 3rem;
          border-radius: 16px;
          box-shadow: 0 8px 25px rgba(0,0,0,0.15);
          max-width: 450px;
          width: 100%;
          text-align: center;
          animation: fadeIn 0.6s ease-in-out;
        }
        h1 {
          font-size: 2rem;
          margin-bottom: 0.5rem;
        }
        p {
          font-size: 1rem;
          margin: 0.5rem 0;
        }
        .badge {
          display: inline-block;
          padding: 0.3rem 0.8rem;
          margin-top: 0.5rem;
          font-size: 0.9rem;
          font-weight: bold;
          color: white;
          background: #3498db;
          border-radius: 8px;
        }
        .footer {
          margin-top: 1.5rem;
          font-size: 0.85rem;
          color: #7f8c8d;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        button {
          margin-top: 1.5rem;
          padding: 0.6rem 1.2rem;
          border: none;
          background: #27ae60;
          color: white;
          font-size: 1rem;
          border-radius: 8px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #219150;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Simple WebApp</h1>
        <p>Hello Vishal 👋, your app is running successfully!</p>
        <p>Version: <span class="badge">${VERSION}</span></p>
        <p>Server time: ${new Date().toLocaleString()}</p>
        <button onclick="window.location.href='/healthz'">Check Health</button>
        <div class="footer">Powered by Express.js • Deployed on AWS ECS Fargate</div>
      </div>
    </body>
    </html>
  `);
});

// Health + readiness endpoints
app.get("/healthz", (req, res) => res.status(200).send("ok"));
app.get("/readyz", (req, res) => res.status(200).send("ready"));

// Start server
app.listen(PORT, () => {
  console.log(`✅ UI running at http://localhost:${PORT}`);
});
