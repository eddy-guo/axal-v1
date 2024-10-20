"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface SurveyResults {
  answers: Record<number, { answer: string; value: number }>;
  riskFactor: number;
}

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

  if (!results) {
    return null;
  }

  return (
    <div>
      <h1>Your Risk Assessment Results</h1>
      <p>Risk Factor: {results.riskFactor}</p>
      <button onClick={() => router.push("/survey")}>Take Survey Again</button>
    </div>
  );
}
