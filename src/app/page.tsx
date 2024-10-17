import Image from "next/image";
import Logo from "../app/public/logo.svg";
import Link from "next/link";

import Graphic from "../app/public/graphic.png";
import autoRebalance from "../app/public/auto-rebalance.svg";
import yieldMaximizer from "../app/public/yield-maximizer.svg";
import autoCashOut from "../app/public/auto-cash-out.svg";
import multichainSupport from "../app/public/multi-chain-support.svg";
import xLogo from "../app/public/x.svg";
import discordLogo from "../app/public/discord.svg";
import githubLogo from "../app/public/github.svg";

export default function Home() {
  return (
    <>
      {/* <div className="absolute top-0 right-0 w-full h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-bl from-gray-800 to-black rounded-bl-full" />
      </div> */}
      <header className="flex justify-between items-center sticky top-0 z-50 px-20 py-10 w-full bg-black bg-opacity-80 backdrop-blur border-b-[1px] border-gray-600">
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
            className="flex items-center h-full justify-center w-12 border border-gray-600 hover:border-white rounded-md transition-colors duration-150"
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
            className="flex items-center h-full justify-center w-12 border border-gray-600 hover:border-white rounded-md transition-colors duration-150"
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
            className="flex items-center h-full justify-center w-12 border border-gray-600 hover:border-white rounded-md transition-colors duration-150"
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
            Connectkit
          </Link>
        </nav>
      </header>
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
              <p className="text-left text-xl py-5">
                A personalized trading bot for complex, multi-step wallet
                strategies. <br />
                Agents guarantee smart execution.
              </p>
            </div>
            <Image src={Graphic} alt="graphic" width={500} height={500} />
          </div>
          <div className="py-20">
            <h1 className="text-5xl pb-5">How it works</h1>
            <ul className="list-disc">
              <li className="text-xl py-1">Assess your risk</li>
              <li className="text-xl py-1">Approve your wallet strategy</li>
              <li className="text-xl py-1">Earn yield in your sleep</li>
            </ul>
          </div>

          <h1 className="text-5xl py-5">Features</h1>
          <div className="w-full flex flex-wrap items-center justify-between py-5">
            <div className="flex flex-col w-[22%] p-6 border border-gray-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <Image
                src={autoRebalance}
                alt="auto-rebalance"
                width={64}
                height={64}
                className="border"
              />
              <h1 className="text-2xl py-5">Auto Rebalance</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col w-[22%] p-6 border border-gray-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <Image
                src={yieldMaximizer}
                alt="yield-maximizer"
                width={64}
                height={64}
                className="border"
              />
              <h1 className="text-2xl py-5">Yield Maximizer</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col w-[22%] p-6 border border-gray-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <div>
                <Image
                  src={autoCashOut}
                  alt="auto-cash-out"
                  width={64}
                  height={64}
                  className="border"
                />
              </div>
              <h1 className="text-2xl py-5">Auto Cash-out</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col w-[22%] p-6 border border-gray-600 bg-neutral-900 hover:border-white transition-colors duration-150">
              <div>
                <Image
                  src={multichainSupport}
                  alt="multi-chain-support"
                  width={64}
                  height={64}
                  className="border"
                />
              </div>
              <h1 className="text-2xl py-5">Multichain Support</h1>
              <p>
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
                <h1 className="text-4xl my-4">Best-in-class security</h1>
                <p className="text-xl my-1">You keep your private keys.</p>
              </div>
              <div className="w-1/2 relative aspect-square border">
                <Image
                  src={Graphic}
                  alt="Graphic"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 relative aspect-square border">
                <Image
                  src={Graphic}
                  alt="Graphic"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="w-1/2 pl-8 flex flex-col justify-center items-end text-right">
                <h1 className="text-4xl my-4">Solver Execution</h1>
                <p className="text-xl my-1">
                  Reduced slippage, gas, and MEV protection.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-8 flex flex-col justify-center">
                <h1 className="text-4xl my-4">Title 3</h1>
                <p className="text-xl my-1">Description for title 3.</p>
              </div>
              <div className="w-1/2 relative aspect-square border">
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
      </div>
      <footer className="w-full flex justify-between items-center px-20 py-5 border-t-[1px] border-gray-600">
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
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Terms of Use
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
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
