import express from "express";

const app = express();
const PORT = process.env.PORT || 8080;
const VERSION = process.env.APP_VERSION || "1.0.0";

app.use(express.json());

// UI route (Professional Dashboard)
app.get("/", (req, res) => {
  const serverTime = new Date().toLocaleString();
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Cloud WebApp Dashboard</title>
      <style>
        body {
          margin: 0;
          font-family: "Inter", "Segoe UI", Roboto, Arial, sans-serif;
          background: #f4f6f9;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          min-height: 100vh;
          padding: 2rem;
        }
        header {
          width: 100%;
          max-width: 900px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        header h1 {
          font-size: 1.8rem;
          color: #2c3e50;
          margin: 0;
        }
        .version-badge {
          background: #3498db;
          color: #fff;
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          font-size: 0.9rem;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1.5rem;
          width: 100%;
          max-width: 900px;
        }
        .card {
          background: #fff;
          border-radius: 12px;
          padding: 1.5rem;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.2s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .card h2 {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #34495e;
        }
        .card p {
          font-size: 1rem;
          color: #555;
        }
        footer {
          margin-top: 2rem;
          font-size: 0.9rem;
          color: #7f8c8d;
        }
        button {
          margin-top: 1rem;
          padding: 0.6rem 1.2rem;
          border: none;
          background: #27ae60;
          color: white;
          font-size: 0.95rem;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        button:hover {
          background: #219150;
        }
      </style>
    </head>
    <body>
      <header>
        <h1>🚀 Cloud WebApp Dashboard</h1>
        <span class="version-badge">v${VERSION}</span>
      </header>

      <div class="grid">
        <div class="card">
          <h2>📅 Server Time</h2>
          <p>${serverTime}</p>
        </div>

        <div class="card">
          <h2>⚡ Health Status</h2>
          <p id="health">Checking...</p>
          <button onclick="checkHealth()">Check Now</button>
        </div>

        <div class="card">
          <h2>📊 Environment</h2>
          <p>Running on AWS ECS Fargate</p>
        </div>
      </div>

      <footer>
        Built with ❤️ using Express.js • Deployed on AWS ECS
      </footer>

      <script>
        async function checkHealth() {
          try {
            const res = await fetch("/healthz");
            if (res.ok) {
              document.getElementById("health").innerText = "✅ Healthy";
            } else {
              document.getElementById("health").innerText = "❌ Unhealthy";
            }
          } catch (err) {
            document.getElementById("health").innerText = "⚠️ Error";
          }
        }
        // Auto-check on load
        checkHealth();
      </script>
    </body>
    </html>
  `);
});

// Health + readiness endpoints
app.get("/healthz", (req, res) => res.status(200).send("ok"));
app.get("/readyz", (req, res) => res.status(200).send("ready"));

// Start server
app.listen(PORT, () => {
  console.log(`✅ Dashboard running at http://localhost:${PORT}`);
});
