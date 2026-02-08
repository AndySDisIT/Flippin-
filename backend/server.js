import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { healthRouter } from "./routes/health.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({ origin: process.env.CORS_ORIGIN || "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "Flippin API",
    status: "ok",
    docs: "/health",
    marketplaces: "/marketplaces"
  });
});

app.use("/health", healthRouter);

app.get("/marketplaces", (req, res) => {
  res.json({
    focus: "local-first",
    options: [
      {
        name: "Facebook Marketplace",
        type: "local",
        notes: "Fast local turnover and pickup-friendly."
      },
      {
        name: "eBay",
        type: "global",
        notes: "Wide buyer pool with strong pricing data."
      },
      {
        name: "Mercari",
        type: "hybrid",
        notes: "Easy shipping labels and casual buyers."
      },
      {
        name: "Etsy",
        type: "niche",
        notes: "Great for handmade, vintage, or curated goods."
      },
      {
        name: "Depop",
        type: "fashion",
        notes: "Popular for streetwear and fashion resale."
      },
      {
        name: "Poshmark",
        type: "fashion",
        notes: "Strong for branded apparel and bundles."
      }
    ]
  });
});

app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`API listening on port ${port}`);
});
