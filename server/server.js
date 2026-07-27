require("dotenv").config();

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const pdf = require("pdf-parse");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const upload = multer({
  storage: multer.memoryStorage(),
});

app.post("/analyze", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No resume uploaded",
      });
    }

    // Extract text from PDF
    const pdfData = await pdf(req.file.buffer);

    const prompt = `
You are an ATS Resume Analyzer.

Analyze the following resume.

Return ONLY valid JSON.

{
  "score": 0,
  "strengths": [],
  "weaknesses": [],
  "suggestions": []
}

Resume:

${pdfData.text}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: prompt,
    });

    let text = response.text.trim();

    // Remove markdown if Gemini wraps the JSON
    text = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const result = JSON.parse(text);

    res.json(result);

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});