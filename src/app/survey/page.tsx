"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Header from "../components/header";
import Footer from "../components/footer";

interface Question {
  id: number;
  text: string;
  options: {
    [key: string]: number;
  };
}

interface Answer {
  question: string;
  answer: string;
  value: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "You identify yourself as a:",
    options: {
      "Knowledgeable investor interested in crypto.": 0,
      "Seasoned crypto investor.": 1,
      "Complete degen.": 2,
    },
  },
  {
    id: 2,
    text: "I plan to withdraw my profits in:",
    options: { "< 1 year.": 2, "5+ years.": 0, "undecided.": 1 },
  },
  {
    id: 3,
    text: "I think buying memecoins is",
    options: { "a terrible idea.": 0, "long on culture.": 1, "🐐 goated 🐐": 2 },
  },
  {
    id: 4,
    text: "Your wallet is up 40%. What do you do?",
    options: {
      "Liquidate and move to a lower risk investment.": 0,
      "Sell enough to cover your original investment, hold the rest.": 1,
      "Buy more 💸": 2,
    },
  },
  {
    id: 5,
    text: "A friend launches a token and wants you to buy; your response?",
    options: {
      "You're an idiot.": 0,
      "Let me look into it and get back to you.": 1,
      "I'm in!": 2,
    },
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [riskFactor, setRiskFactor] = useState(0);

  useEffect(() => {
    localStorage.removeItem("finalSurveyResults");
  }, []);

  // update localStorage when something changes
  useEffect(() => {
    localStorage.setItem("tempSurveyAnswers", JSON.stringify(answers));
    localStorage.setItem(
      "tempSurveyCurrentQuestion",
      currentQuestion.toString()
    );
    localStorage.setItem("tempSurveyRiskFactor", riskFactor.toString());
  }, [answers, riskFactor, currentQuestion]);

  const handleAnswer = (
    questionId: number,
    question: string,
    answer: string,
    value: number
  ) => {
    const newAnswers = {
      ...answers,
      [questionId]: { question, answer, value },
    };
    setAnswers(newAnswers);

    const newRiskFactor = Object.values(newAnswers).reduce(
      (sum, ans) => sum + ans.value,
      0
    );
    setRiskFactor(newRiskFactor);

    if (currentQuestion < questions.length - 1 && !isReviewMode) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const allQuestionsAnswered = Object.keys(answers).length === questions.length;

  const router = useRouter();
  const handleSubmit = () => {
    if (Object.keys(answers).length === questions.length) {
      localStorage.setItem(
        "finalSurveyResults",
        JSON.stringify({ answers, riskFactor })
      );
      localStorage.removeItem("tempSurveyAnswers");
      localStorage.removeItem("tempSurveyRiskFactor");
      localStorage.removeItem("tempSurveyCurrentQuestion");
      // Navigate to results page
      router.push("/results");
    }
  };

  const renderQuestion = (question: Question, index: number) => (
    <div key={question.id} className="mb-8 w-full">
      <h2 className="text-xl mb-4">
        <b>
          {index + 1}/{questions.length}:
        </b>{" "}
        {question.text}
      </h2>
      <div className="flex flex-col gap-2">
        {Object.entries(question.options).map(
          ([option, value], optionIndex) => (
            <button
              key={optionIndex}
              onClick={() =>
                handleAnswer(question.id, question.text, option, value)
              }
              className={`w-3/4 py-2 px-4 rounded transition duration-200 text-left ${
                answers[question.id]?.answer === option
                  ? "bg-gray-800 border border-white text-white"
                  : "bg-gray-800 hover:bg-gray-600 active:bg-gray-500"
              }`}
            >
              {option}
            </button>
          )
        )}
      </div>
    </div>
  );
  return (
    <div className="flex flex-col min-h-screen">
      <div className="absolute top-0 right-0 inset-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-bl from-gray-500 via-black to-black rounded-bl-full" />
      </div>
      <Header />
      <div className="flex-grow flex flex-col pb-10 px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex-grow flex flex-col min-h-full items-center z-10">
          <div className="w-full max-w-2xl py-20">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Risk Profile Questionnaire
            </h1>
            {isReviewMode ? (
              <div className="flex flex-col items-center">
                {questions.map((question, index) =>
                  renderQuestion(question, index)
                )}
                <button
                  onClick={() => setIsReviewMode(!isReviewMode)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-600 active:bg-gray-500 rounded transition duration-200"
                >
                  {isReviewMode
                    ? "Return to Single Question View"
                    : "Review All Questions"}
                </button>
              </div>
            ) : (
              <>
                {renderQuestion(questions[currentQuestion], currentQuestion)}
                <div className="flex justify-between mt-4">
                  <button
                    onClick={goToPreviousQuestion}
                    disabled={currentQuestion === 0}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-600 active:bg-gray-500 rounded transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-800"
                  >
                    ←
                  </button>
                  <button
                    onClick={() => setIsReviewMode(!isReviewMode)}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-600 active:bg-gray-500 rounded transition duration-200"
                  >
                    {isReviewMode
                      ? "Return to Single Question View"
                      : "Review All Questions"}
                  </button>
                  <button
                    onClick={goToNextQuestion}
                    disabled={currentQuestion === questions.length - 1}
                    className="px-4 py-2 bg-gray-800 hover:bg-gray-600 active:bg-gray-500 rounded transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-gray-800"
                  >
                    →
                  </button>
                </div>
              </>
            )}
            <div className="mt-8 text-center">
              <p className="text-sm mt-2">
                (<b>{Object.keys(answers).length}</b> of{" "}
                <b>{questions.length}</b> questions answered)
              </p>
              <button
                onClick={handleSubmit}
                className="mt-4 px-6 py-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white rounded transition duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
                disabled={!allQuestionsAnswered}
              >
                Submit Answers
              </button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
