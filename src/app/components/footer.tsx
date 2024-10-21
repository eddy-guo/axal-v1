export default function Footer() {
  return (
    <footer className="w-full flex justify-between items-center px-20 py-5 mt-auto border-t-[1px] border-neutral-600 relative z-10">
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
          href="mailto:hello@getaxal.com"
          target="_blank"
          className="hover:underline hover:underline-offset-4 flex items-center h-full"
        >
          Contact
        </a>
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
  );
}
