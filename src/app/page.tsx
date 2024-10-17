import Image from "next/image";
import Logo from "../app/public/logo.svg";
import Link from "next/link";

import Graphic from "../app/public/graphic.png";
import autoRebalance from "../app/public/auto-rebalance.svg";
import yieldMaximizer from "../app/public/yield-maximizer.svg";
import autoCashOut from "../app/public/auto-cash-out.svg";
import multichainSupport from "../app/public/multi-chain-support.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full min-h-screen px-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row sticky top-0 z-10">
        <Link href="/">
          <Image src={Logo} alt="logo" />
        </Link>
        <Link href="/">Contact</Link>
        <Link href="/">Docs</Link>
        <Link href="/">Connectkit</Link>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center">
        <h1 className="text-7xl">Your crypto wallet on autopilot</h1>
        <p>
          A personalized trading bot for complex, multi-step wallet strategies.
          Agents guarantee smart execution.
        </p>
        <Image src={Graphic} alt="graphic" width={500} height={500} />
        <h1 className="text-5xl">HOW IT WORKS</h1>
        <ul className="list-disc">
          <li>Assess your risk</li>
          <li>Approve your wallet strategy</li>
          <li>Earn yield in your sleep</li>
        </ul>
        <h1 className="text-5xl">FEATURES</h1>
        <div className="w-full flex flex-wrap items-center justify-between">
          <div className="flex flex-col w-[22%] border p-6 bg-gray-700">
            <Image
              src={autoRebalance}
              alt="auto-rebalance"
              width={64}
              height={64}
            />
            <h1 className="text-2xl">Auto Rebalance</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col w-[22%] border p-6 bg-gray-700">
            <Image
              src={yieldMaximizer}
              alt="yield-maximizer"
              width={64}
              height={64}
            />
            <h1 className="text-2xl">Yield Maximizer</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col w-[22%] border p-6 bg-gray-700">
            <div>
              <Image
                src={autoCashOut}
                alt="auto-cash-out"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-2xl">Auto Cash-out</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="flex flex-col w-[22%] border p-6 bg-gray-700">
            <div>
              <Image
                src={multichainSupport}
                alt="multi-chain-support"
                width={64}
                height={64}
              />
            </div>
            <h1 className="text-2xl">Multichain Support</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <h1 className="text-5xl">READ OUR DOCS BUTTON</h1>

        <section className="w-3/4 my-12">
          <div className="flex mb-12">
            <div className="w-1/2 pr-8 flex flex-col justify-center">
              <h3 className="text-3xl mb-4">Best in class security</h3>
              <p>You keep your private keys.</p>
            </div>
            <div className="w-1/2 relative aspect-square">
              <Image
                src={Graphic}
                alt="Graphic"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div className="flex mb-12">
            <div className="w-1/2 relative aspect-square">
              <Image
                src={Graphic}
                alt="Graphic"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="w-1/2 pl-8 flex flex-col justify-center items-end text-right">
              <h3 className="text-3xl mb-4">Solver Execution</h3>
              <p>Reduced slippage, gas, and MEV protection.</p>
            </div>
          </div>
          <div className="flex mb-12">
            <div className="w-1/2 pr-8 flex flex-col justify-center">
              <h3 className="text-3xl mb-4">Title 3</h3>
              <p>Description for title 3.</p>
            </div>
            <div className="w-1/2 relative aspect-square">
              <Image
                src={Graphic}
                alt="Graphic"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to nextjs.org
        </a>
      </footer>
    </div>
  );
}
