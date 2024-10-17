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
      <header className="flex justify-between items-center sticky top-0 z-10 px-20 py-10 w-full bg-black bg-opacity-80 backdrop-blur border-b-[1px] border-gray-600">
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
        <main className="flex-grow flex flex-col items-center justify-center">
          <h1 className="text-7xl py-10 ">
            Your crypto wallet on <br />
            <u>autopilot</u>
          </h1>
          <p>
            A personalized trading bot for complex, multi-step wallet
            strategies. Agents guarantee smart execution.
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
            <div className="flex flex-col w-[22%] border p-6 bg-gray-600">
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
            <div className="flex flex-col w-[22%] border p-6 bg-gray-600">
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
            <div className="flex flex-col w-[22%] border p-6 bg-gray-600">
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
            <div className="flex flex-col w-[22%] border p-6 bg-gray-600">
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
          <h1 className="text-3xl">READ OUR DOCS BUTTON</h1>

          <section className="w-3/4 my-12">
            <div className="flex">
              <div className="w-1/2 pr-8 flex flex-col justify-center">
                <h1 className="text-4xl mb-4">Best in class security</h1>
                <p className="text-xl">You keep your private keys.</p>
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
                <h1 className="text-4xl mb-4">Solver Execution</h1>
                <p className="text-xl">
                  Reduced slippage, gas, and MEV protection.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2 pr-8 flex flex-col justify-center">
                <h1 className="text-4xl mb-4">Title 3</h1>
                <p className="text-xl">Description for title 3.</p>
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
        <footer className="w-full flex justify-between items-center">
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
      </div>
    </>
  );
}
