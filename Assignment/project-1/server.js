import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));  // serve frontend files

// GET /api/quotes - fetch all quotes
app.get('/api/quotes', async (req, res) => {
  try {
    const quotes = await prisma.quote.findMany();
    res.json(quotes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch quotes" });
  }
});

// POST /api/quotes - add a new quote (optional)
app.post('/api/quotes', async (req, res) => {
  const { text, author } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const newQuote = await prisma.quote.create({ data: { text, author } });
    res.status(201).json(newQuote);
  } catch (error) {
    res.status(500).json({ error: "Failed to create quote" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
