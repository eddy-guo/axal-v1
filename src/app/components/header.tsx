import Image from "next/image";
import Link from "next/link";

import Logo from "../public/logo.svg";
import xLogo from "../public/x.svg";
import discordLogo from "../public/discord.svg";
import githubLogo from "../public/github.svg";

export default function Header() {
  return (
    <header className="flex justify-between items-center sticky top-0 z-50 px-20 py-10 w-full bg-black bg-opacity-50 backdrop-blur border-b-[1px] border-neutral-600">
      <Link href="/">
        <Image src={Logo} alt="logo" width={150} />
      </Link>
      <nav className="flex items-center gap-6 h-10">
        <Link
          href="/survey"
          className="hover:underline hover:underline-offset-4 flex items-center h-full"
        >
          Launch
        </Link>
        <Link
          href="mailto:hello@getaxal.com"
          target="_blank"
          className="hover:underline hover:underline-offset-4 flex items-center h-full"
        >
          Contact
        </Link>
        <Link
          href="https://axal.substack.com/"
          target="_blank"
          className="hover:underline hover:underline-offset-4 flex items-center h-full"
        >
          Blog
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
          className="flex items-center h-full justify-center w-10 border border-neutral-600 hover:border-white rounded-md transition-colors duration-150"
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
          className="flex items-center h-full justify-center w-10 border border-neutral-600 hover:border-white rounded-md transition-colors duration-150"
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
          className="flex items-center h-full justify-center w-10 border border-neutral-600 hover:border-white rounded-md transition-colors duration-150"
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
          Connect
        </Link>
      </nav>
    </header>
  );
}
