import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex h-12 w-36 items-center justify-center gap-2 rounded-full bg-slate-950 font-semibold text-white outline-none transition-all hover:-translate-y-1 hover:bg-slate-800 active:scale-95 disabled:translate-y-0 disabled:opacity-60 dark:bg-lime-300 dark:text-slate-950 dark:hover:bg-lime-200"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-current"></div>
      ) : (
        <>
          Send message{" "}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
        </>
      )}
    </button>
  );
}
