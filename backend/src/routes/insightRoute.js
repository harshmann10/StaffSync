const express = require("express");
const InsightRouter = express.Router();
const { GoogleGenAI } = require("@google/genai");
const Employee = require("../models/employee");

const genAI = new GoogleGenAI(process.env.GEMINI_API_KEY);

InsightRouter.get("/", async (req, res) => {
    try {
        const employees = await Employee.find();
        const prompt = generatePromptFromEmployees(employees);
        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash",
            contents: [{ role: "user", parts: [{ text: prompt }] }]
        });
        
        const insight =
            response?.candidates?.[0]?.content?.parts?.[0]?.text ||
            "No insight generated.";

        res.json({ insight });
    } catch (error) {
        console.error("Gemini API Error:", error);
        res.status(500).json({ error: "Insight generation failed" });
    }
});

function generatePromptFromEmployees(employees) {
    const data = employees
        .map((e) => {
            const doj = new Date(e.dateOfJoining);
            const last = e.lastDay
                ? new Date(e.lastDay)
                : new Date();
            const years = ((last - doj) / (1000 * 60 * 60 * 24 * 365)).toFixed(1);
            return `${e.name} (${e.designation}, ${e.department}) stayed for ${years} years`;
        })
        .join("\n");

    return `Here is employee data:\n${data}\n\nGive insights about what employee designations stick to companies and for how many years on average, and which departments have high attrition.`;
}

module.exports = InsightRouter;
