"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

import Header from "../components/header";
import Footer from "../components/footer";
import Modal from "../components/modal";
import ToggleSwitch from "../components/toggleswitch";

interface SurveyResults {
  answers: Record<number, { question: string; answer: string; value: number }>;
  riskFactor: number;
}

const getRiskLevel = (riskFactor: number) => {
  if (riskFactor <= 3)
    return {
      level: "HODLer",
      desc: "You're in crypto for the long-term. This wallet is an investment and you only take profits when necessary.",
      color: "bg-green-500",
    };
  if (riskFactor <= 7)
    return {
      level: "Hunter",
      desc: "You don't mind ape-ing into a memecoin here and there. You take profits when necessary and strive for balance.",
      color: "bg-yellow-500",
    };
  return {
    level: "Degen",
    desc: "You're a junkie for high-risk, high-reward projects. What are stables?",
    color: "bg-red-500",
  };
};

export default function Result() {
  const router = useRouter();
  const [results, setResults] = useState<SurveyResults | null>(null);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isAssetListModalOpen, setIsAssetListModalOpen] = useState(false);
  const [settings, setSettings] = useState({
    autoRebalance: false,
    autoExit: false,
    autoTokenSwap: false,
    autoYieldHarvesting: false,
    swapYield: "",
    sendTo: "",
  });

  useEffect(() => {
    const storedResults = localStorage.getItem("finalSurveyResults");
    const storedSettings = localStorage.getItem("userSettings");
    if (!storedResults) {
      router.replace("/");
    } else {
      setResults(JSON.parse(storedResults));
    }
    if (storedSettings) {
      setSettings(JSON.parse(storedSettings));
    }
  }, []);

  const saveSettings = () => {
    localStorage.setItem("userSettings", JSON.stringify(settings));
    setIsSettingsModalOpen(false);
  };

  const toggleSetting = (settingName: keyof typeof settings) => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      [settingName]: !prevSettings[settingName],
    }));
  };

  if (!results) return null;

  const { level, desc, color } = getRiskLevel(results.riskFactor);
  const maxRiskFactor = 10;

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="absolute top-0 right-0 inset-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-bl from-gray-500 via-black to-black rounded-bl-full" />
      </div>
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center z-10 px-4 py-8">
        <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-2xl w-full">
          <h1 className="text-3xl font-bold mb-5 text-center text-white">
            Risk Assessment Results
          </h1>

          <div className="mb-5">
            <p className="text-lg mb-2 text-white font-bold">
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
            <div>
              <p className="my-2 text-xl font-bold text-white">
                You are a:{" "}
                <span className={`${color.replace("bg-", "text-")}`}>
                  {level}
                </span>
              </p>
              <p>{desc}</p>
            </div>
            <div className="flex justify-between mt-6">
              <Link
                href="https://www.ax.al/"
                target="_blank"
                className="px-4 py-2 bg-violet-600 hover:bg-violet-700 active:bg-violet-800 rounded transition-colors"
              >
                Launch Now
              </Link>
              <button
                onClick={() => setIsSettingsModalOpen(true)}
                className="px-4 py-2 bg-violet-300 hover:bg-violet-400 active:bg-violet-500 text-purple-900 rounded transition-colors"
              >
                Settings
              </button>
              <button
                onClick={() => setIsAssetListModalOpen(true)}
                className="px-4 py-2 bg-violet-300 hover:bg-violet-400 active:bg-violet-500 text-purple-900 rounded transition-colors"
              >
                Asset List
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Your Answers:
            </h2>
            {Object.entries(results.answers).map(([questionId, answer]) => (
              <div key={questionId} className="mb-4 bg-gray-700 p-4 rounded">
                <p className="font-bold text-white">
                  {parseInt(questionId)}. {answer.question}
                </p>
                <p className="text-gray-300">{answer.answer}</p>
              </div>
            ))}
          </div>

          <button
            onClick={() => router.push("/survey")}
            className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white py-3 rounded-lg transition duration-300"
          >
            Take Survey Again
          </button>
        </div>
      </main>
      <Footer />
      <Modal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        title="Advanced Settings"
      >
        <p className="text-sm text-gray-300 mb-5">
          Axal Autopilot is the only trading bot that allows for complex,
          multi-step trading strategies.
        </p>
        <div className="flex">
          <div className="w-1/2 space-y-6 pr-4">
            <ToggleSwitch
              isOn={settings.autoRebalance}
              onToggle={() => toggleSetting("autoRebalance")}
              label="Auto-Rebalance Wallet"
            />
            <ToggleSwitch
              isOn={settings.autoExit}
              onToggle={() => toggleSetting("autoExit")}
              label="Auto-Exit"
            />
            <ToggleSwitch
              isOn={settings.autoTokenSwap}
              onToggle={() => toggleSetting("autoTokenSwap")}
              label="Auto-Token Swap"
            />
            <ToggleSwitch
              isOn={settings.autoYieldHarvesting}
              onToggle={() => toggleSetting("autoYieldHarvesting")}
              label="Auto-Yield Harvesting"
            />
          </div>

          <div className="space-y-6 pl-4">
            <div className="space-x-2">
              <Link
                href="https://www.ax.al/"
                target="_blank"
                className="text-sm text-red-600 hover:underline hover:underline-offset-4"
              >
                Set Parameters ↗
              </Link>
              <span className="text-white">Stop Loss</span>
            </div>
            <div className="space-x-2">
              <Link
                href="https://www.ax.al/"
                target="_blank"
                className="text-sm text-red-600 hover:underline hover:underline-offset-4"
              >
                Set Parameters ↗
              </Link>
              <span className="text-white">Limit</span>
            </div>

            <div>
              <span className="text-white block mb-1">Swap yield to:</span>
              <input
                type="text"
                placeholder="Token (i.e. USDT)"
                className="w-full px-2 py-1 bg-gray-700 text-white rounded"
              />
            </div>

            <div>
              <span className="text-white block mb-1">Send to:</span>
              <input
                type="text"
                placeholder="ERC-20 wallet (i.e. 0x...)"
                className="w-full px-2 py-1 bg-gray-700 text-white rounded"
              />
            </div>
          </div>
        </div>

        <button
          onClick={saveSettings}
          className="w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-800 text-white px-4 py-2 rounded transition-colors mt-6"
        >
          Save
        </button>
      </Modal>

      <Modal
        isOpen={isAssetListModalOpen}
        onClose={() => setIsAssetListModalOpen(false)}
        title="Asset List"
      >
        <div className="space-y-2">
          <p className="text-white">Asset 1</p>
          <p className="text-white">Asset 2</p>
          <p className="text-white">Asset 3</p>
        </div>
      </Modal>
    </div>
  );
}
