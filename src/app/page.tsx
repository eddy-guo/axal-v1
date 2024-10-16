import Image from "next/image";
import Logo from "../app/public/logo.svg";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-row sticky top-0 z-10">
        <Image src={Logo} alt="logo" />
        sticky header here
      </header>
      <main className="flex-grow">
        <h1 className="text-5xl">Your crypto wallet on autopilot</h1>
        <p>
          A personalized trading bot for complex, multi-step wallet strategies.
          Agents guarantee smart execution.
        </p>
        <ul>
          how it works
          <li>Assess your risk</li>
          <li>Approve your wallet strategy</li>
          <li>Earn yield in your sleep</li>
        </ul>
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
