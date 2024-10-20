"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

interface SurveyResults {
  answers: Record<number, { question: string; answer: string; value: number }>;
  riskFactor: number;
}

const getRiskLevel = (riskFactor: number) => {
  if (riskFactor <= 3) return { level: "Low", color: "bg-green-500" };
  if (riskFactor <= 7) return { level: "Medium", color: "bg-yellow-500" };
  return { level: "High", color: "bg-red-500" };
};

export default function Result() {
  const router = useRouter();
  const [results, setResults] = useState<SurveyResults | null>(null);

  useEffect(() => {
    const storedResults = localStorage.getItem("finalSurveyResults");
    if (!storedResults) {
      router.replace("/");
    } else {
      setResults(JSON.parse(storedResults));
    }
  }, []);

  if (!results) return null;

  const { level, color } = getRiskLevel(results.riskFactor);
  const maxRiskFactor = 10;

  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-0 right-0 inset-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-bl from-gray-500 via-black to-black rounded-bl-full" />
      </div>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center z-10 px-4 py-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-6 text-center text-white">
            Your Risk Assessment Results
          </h1>

          <div className="mb-8">
            <p className="text-xl mb-2 text-white">
              Risk Factor: {results.riskFactor} / {maxRiskFactor}
            </p>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <div
                className={`${color} h-4 rounded-full`}
                style={{
                  width: `${(results.riskFactor / maxRiskFactor) * 100}%`,
                }}
              ></div>
            </div>
            <p className="mt-2 text-lg font-semibold text-white">
              Risk Level:{" "}
              <span className={`${color.replace("bg-", "text-")}`}>
                {level}
              </span>
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Your Answers:
            </h2>
            {Object.entries(results.answers).map(([questionId, answer]) => (
              <div key={questionId} className="mb-4 bg-gray-700 p-4 rounded">
                <p className="font-medium text-white">
                  {parseInt(questionId)}. {answer.question}
                </p>
                <p className="text-gray-300">{answer.answer}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push("/survey")}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Take Survey Again
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
