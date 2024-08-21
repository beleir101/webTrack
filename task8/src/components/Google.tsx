import { FaGoogle } from "react-icons/fa";
import { signIn } from "next-auth/react";

export default function Google({ wrd }: { wrd: string }) {
  return (
    <div className="flex  items-center mt-5">
      <button
        onClick={() => signIn("google")}
        className="flex items-center gap-3 justify-center w-60 px-4 py-2 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 transition-colors duration-300"
      >
        <FaGoogle />
        {wrd}
      </button>
    </div>
  );
}
