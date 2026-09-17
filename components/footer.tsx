export default function Footer() {
  return (
    <footer className="mb-10 flex w-full max-w-[72rem] flex-col items-center justify-between gap-3 border-t border-slate-900/10 px-4 pt-8 text-center text-sm text-slate-500 sm:flex-row sm:text-left dark:border-white/10 dark:text-slate-400">
      <p>© {new Date().getFullYear()} Partha Pratim Changmai</p>
      <p>Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.</p>
    </footer>
  );
}
