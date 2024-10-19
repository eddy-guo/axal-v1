"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import Logo from "../../app/public/logo.svg";
import xLogo from "../../app/public/x.svg";
import discordLogo from "../../app/public/discord.svg";
import githubLogo from "../../app/public/github.svg";

interface Question {
  id: number;
  text: string;
  options: {
    [key: string]: number;
  };
}

interface Answer {
  answer: string;
  value: number;
}

const questions: Question[] = [
  {
    id: 1,
    text: "You identify yourself as a",
    options: {
      "knowledgeable investor interested in crypto": 0,
      "seasoned crypto investor": 1,
      "complete degen": 2,
    },
  },
  {
    id: 2,
    text: "I [plan/do not plan] to withdraw my profits in three years or less.",
    options: { "do not plan": 0, plan: 2, undecided: 1 },
  },
  {
    id: 3,
    text: "I think buying memecoins is",
    options: { "a terrible idea": 0, "long on culture": 1, goated: 2 },
  },
  {
    id: 4,
    text: "Your wallet is up 40%. What do you do?",
    options: {
      "Sell and move to a lower risk investment": 0,
      "Consider selling enough to cover your original investment": 1,
      "Buy more": 2,
    },
  },
  {
    id: 5,
    text: "Your friend is launching a token and wants you to buy; what do you say?",
    options: {
      "You're an idiot": 0,
      "Let me look into it and get back to you": 1,
      "I'm in": 2,
    },
  },
];

export default function Home() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [riskFactor, setRiskFactor] = useState(0);

  const handleAnswer = (questionId: number, answer: string, value: number) => {
    const newAnswers = { ...answers, [questionId]: { answer, value } };
    setAnswers(newAnswers);

    // Calculate new risk factor
    const newRiskFactor = Object.values(newAnswers).reduce(
      (sum, ans) => sum + ans.value,
      0
    );
    setRiskFactor(newRiskFactor);

    if (currentQuestion < questions.length - 1 && !isReviewMode) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const renderQuestion = (question: Question, index: number) => (
    <div key={question.id} className="mb-8">
      <h2 className="text-xl mb-4">
        Question {index + 1}: {question.text}
      </h2>
      <div className="space-y-2">
        {Object.entries(question.options).map(
          ([option, value], optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => handleAnswer(question.id, option, value)}
              className={`w-full py-2 px-4 rounded transition duration-200 ${
                answers[question.id]?.answer === option
                  ? "bg-blue-600 text-white"
                  : "bg-gray-800 hover:bg-gray-700 active:bg-blue-600"
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
    <>
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-bl from-gray-500 via-black to-black rounded-bl-full" />
      </div>
      <header className="flex justify-between items-center sticky top-0 z-50 px-20 py-10 w-full bg-black bg-opacity-50 backdrop-blur border-b-[1px] border-neutral-600">
        <Link href="/">
          <Image src={Logo} alt="logo" width={175} />
        </Link>
        <nav className="flex items-center gap-6 h-12">
          <Link
            href="mailto:hello@getaxal.com"
            target="_blank"
            className="hover:underline hover:underline-offset-4 flex items-center h-full"
          >
            Contact
          </Link>
          <Link
            href="https://www.ax.al/"
            target="_blank"
            className="hover:underline hover:underline-offset-4 flex items-center h-full"
          >
            Docs
          </Link>
          <Link
            href="https://x.com/getaxal"
            target="_blank"
            className="flex items-center h-full justify-center w-12 border border-neutral-600 hover:border-white rounded-md transition-colors duration-150"
          >
            <Image
              src={xLogo}
              alt="x-logo"
              sizes="100vw"
              className="w-auto h-1/2"
            />
          </Link>
          <Link
            href="https://www.ax.al/"
            target="_blank"
            className="flex items-center h-full justify-center w-12 border border-neutral-600 hover:border-white rounded-md transition-colors duration-150"
          >
            <Image
              src={discordLogo}
              alt="discord-logo"
              sizes="100vw"
              className="w-auto h-1/2"
            />
          </Link>
          <Link
            href="https://github.com/getaxal"
            target="_blank"
            className="flex items-center h-full justify-center w-12 border border-neutral-600 hover:border-white rounded-md transition-colors duration-150"
          >
            <Image
              src={githubLogo}
              alt="github-logo"
              sizes="100vw"
              className="w-auto h-1/2"
            />
          </Link>
          <Link
            href="/"
            className="hover:underline hover:underline-offset-4 flex items-center h-full"
          >
            ConnectKit
          </Link>
        </nav>
      </header>
      <div className="flex flex-col min-h-full min-h-screen pb-10 px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex-grow flex flex-col items-center justify-center z-10">
          <div className="w-full max-w-2xl">
            <h1 className="text-3xl font-bold mb-8 text-center">
              Investor Profile Questionnaire
            </h1>
            <button
              onClick={() => setIsReviewMode(!isReviewMode)}
              className="mb-4 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition duration-200"
            >
              {isReviewMode
                ? "Return to Single Question View"
                : "Review All Questions"}
            </button>
            {isReviewMode ? (
              <div className="space-y-8">
                {questions.map((question, index) =>
                  renderQuestion(question, index)
                )}
              </div>
            ) : (
              renderQuestion(questions[currentQuestion], currentQuestion)
            )}
            <div className="mt-8 text-center">
              <p className="text-xl">Current Risk Factor: {riskFactor}</p>
            </div>
          </div>
        </main>
      </div>
      <footer className="w-full flex justify-between items-center px-20 py-5 border-t-[1px] border-neutral-600">
        <div>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.ax.al/"
            target="_blank"
            rel="noopener noreferrer"
          >
            © 2024 - Axal
          </a>
        </div>
        <div className="flex gap-6">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.ax.al/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://www.ax.al/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>
        </div>
      </footer>
    </>
  );
}
