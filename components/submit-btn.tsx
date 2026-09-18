import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { BsArrowUpRight } from "react-icons/bs";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return <button type="submit" className="group flex h-14 w-full items-center justify-between rounded-full bg-[#c7ff35] px-6 font-bold text-[#10110f] transition hover:-translate-y-1 hover:bg-white active:scale-[0.99] disabled:translate-y-0 disabled:opacity-60" disabled={pending}>{pending ? <span className="mx-auto h-5 w-5 animate-spin rounded-full border-2 border-black/25 border-t-black" /> : <><span>Send message</span><BsArrowUpRight className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></>}</button>;
}
