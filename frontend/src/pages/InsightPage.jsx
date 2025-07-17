import { useState, useEffect } from "react";
import { getInsights } from "../api/insightApi";
import ReactMarkdown from "react-markdown";

const CACHE_KEY = "cachedInsight";
const CACHE_EXPIRATION_MS = 10 * 60 * 1000; 

export default function InsightPage() {
    const [insight, setInsight] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchInsights = async () => {
            try {
                const cachedData = localStorage.getItem(CACHE_KEY);
                if (cachedData) {
                    const { data, timestamp } = JSON.parse(cachedData);
                    const now = new Date().getTime();

                    if (now - timestamp < CACHE_EXPIRATION_MS) {
                        setInsight(data);
                        setLoading(false);
                        return;
                    } else {
                        localStorage.removeItem(CACHE_KEY);
                    }
                }

                const response = await getInsights();
                const newInsight = response.data.insight;
                setInsight(newInsight);

                localStorage.setItem(
                    CACHE_KEY,
                    JSON.stringify({
                        data: newInsight,
                        timestamp: new Date().getTime(),
                    })
                );
            } catch (err) {
                console.error("Failed to fetch insights:", err);
                setError("Failed to load insights. Please try again later.");
            } finally {
                setLoading(false);
            }
        };

        fetchInsights();
    }, []);

    if (loading) {
        return <div className="text-center p-12">Generating insights...</div>;
    }

    if (error) {
        return <div className="text-center p-12 text-red-500">{error}</div>;
    }

    return (
        <div className="container mx-auto p-6 md:p-8 lg:p-12">
            <h2 className="text-3xl font-bold mb-6 text-center text-white">Employee Insights</h2>
            <div className="max-w-3xl mx-auto bg-gray-700 p-8 rounded-lg shadow-md">
                {insight ? (
                    <div className="prose prose-invert max-w-none text-gray-200">
                        <ReactMarkdown>
                            {insight}
                        </ReactMarkdown>
                    </div>
                ) : (
                    <p className="text-lg text-gray-400">No insights available yet.</p>
                )}
            </div>
        </div>
    );
}