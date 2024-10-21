"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import Header from "../app/components/header";
import Footer from "../app/components/footer";

import graphic from "../app/public/graphic.png";
import graphic2 from "../app/public/graphic-2.png";
import autoRebalance from "../app/public/auto-rebalance.svg";
import yieldMaximizer from "../app/public/yield-maximizer.svg";
import autoCashOut from "../app/public/auto-cash-out.svg";
import multichainSupport from "../app/public/multi-chain-support.svg";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem("finalSurveyResults");
  }, []);
  return (
    <>
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-bl from-gray-500 via-black to-black rounded-bl-full" />
      </div>
      <Header />
      <div className="flex flex-col min-h-full min-h-screen pb-10 px-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex-grow flex flex-col items-center z-10">
          <div className="flex justify-between w-full">
            <div>
              <h1 className="text-7xl pt-20">
                Your crypto wallet on <br />
                <b>
                  <u>Autopilot</u>
                </b>
              </h1>
              <p className="text-left text-xl py-10">
                A personalized trading bot for complex, multi-step wallet
                strategies. <br />
                Agents guarantee smart execution.
              </p>
              <Link
                href="/survey"
                className="bg-neutral-600 border border-neutral-600 hover:bg-neutral-800 hover:border-white text-white font-bold py-4 px-6 rounded-lg mr-5"
              >
                Get Started
              </Link>
              <Link
                href="https://www.ax.al/"
                target="_blank"
                className="border border-neutral-600 hover:bg-neutral-800 hover:border-white text-white font-bold py-4 px-6 rounded-lg mx-5"
              >
                Learn More
              </Link>
            </div>
            <Image src={graphic2} alt="graphic-2" width={500} height={500} />
          </div>
          <div className="w-full py-20 bg-black text-white text-center">
            <h1 className="text-5xl font-bold mb-8">How it works</h1>
            <ul className="list-disc list-inside space-y-6 text-xl leading-relaxed text-left max-w-xl mx-auto">
              <li className="flex items-start">
                <span className="mr-3">🔍</span> {/* Custom icon or emoji */}
                <p>Assess your risk</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3">📝</span>
                <p>Approve your wallet strategy</p>
              </li>
              <li className="flex items-start">
                <span className="mr-3">💤</span>
                <p>Earn yield in your sleep</p>
              </li>
            </ul>
          </div>

          <h1 className="text-5xl py-5 font-bold">Features</h1>
          <div className="w-full flex flex-wrap items-center justify-between py-5">
            <div className="flex flex-col w-[22%] p-6 border border-neutral-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <Image
                src={autoRebalance}
                alt="auto-rebalance"
                width={64}
                height={64}
                className="border"
              />
              <h1 className="text-2xl font-bold py-5">Auto Rebalance</h1>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col w-[22%] p-6 border border-neutral-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <Image
                src={yieldMaximizer}
                alt="yield-maximizer"
                width={64}
                height={64}
                className="border"
              />
              <h1 className="text-2xl font-bold py-5">Yield Maximizer</h1>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col w-[22%] p-6 border border-neutral-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <div>
                <Image
                  src={autoCashOut}
                  alt="auto-cash-out"
                  width={64}
                  height={64}
                  className="border"
                />
              </div>
              <h1 className="text-2xl font-bold py-5">Auto Cash-out</h1>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col w-[22%] p-6 border border-neutral-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <div>
                <Image
                  src={multichainSupport}
                  alt="multi-chain-support"
                  width={64}
                  height={64}
                  className="border"
                />
              </div>
              <h1 className="text-2xl font-bold py-5">Multichain Support</h1>
              <p className="text-neutral-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <Link
            href="https://www.ax.al/"
            target="_blank"
            className="text-xl py-5 hover:underline hover:underline-offset-4 flex items-center h-full"
          >
            Read Documentation ↗
          </Link>

          <section className="w-3/4 py-16">
            <div className="flex">
              <div className="w-1/2 pr-8 flex flex-col justify-center">
                <h1 className="text-4xl my-4 font-bold">
                  Best-in-class security
                </h1>
                <p className="text-xl my-1">You keep your private keys.</p>
              </div>
              <div className="w-1/2 relative aspect-square">
                <Image
                  src={graphic}
                  alt="graphic"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 relative aspect-square">
                <Image
                  src={graphic}
                  alt="graphic"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="w-1/2 pl-8 flex flex-col justify-center items-end text-right">
                <h1 className="text-4xl my-4 font-bold">Solver Execution</h1>
                <p className="text-xl my-1">
                  Reduced slippage, gas, and MEV protection.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-8 flex flex-col justify-center">
                <h1 className="text-4xl my-4 font-bold">Title 3</h1>
                <p className="text-xl my-1">Description for title 3.</p>
              </div>
              <div className="w-1/2 relative aspect-square">
                <Image
                  src={graphic}
                  alt="graphic"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
