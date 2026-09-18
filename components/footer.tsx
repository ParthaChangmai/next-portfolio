import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mx-auto mb-8 flex w-[calc(100%_-_2rem)] max-w-[72rem] flex-col gap-5 border-t border-black/15 pt-6 text-xs font-bold uppercase tracking-[0.12em] text-black/45 sm:flex-row sm:items-center sm:justify-between dark:border-white/15 dark:text-white/45">
      <p>© {new Date().getFullYear()} Partha Pratim Changmai</p>
      <div className="flex items-center gap-5">
        <span>Built for the web</span>
        <a href="https://github.com/ParthaChangmai" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-black dark:hover:text-white"><BsGithub /></a>
        <a href="https://www.linkedin.com/in/partha-changmai-6a9293208/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-black dark:hover:text-white"><BsLinkedin /></a>
      </div>
    </footer>
  );
}
