import Link from "next/link";

export default function Last() {
  return (
    <div className="mb-3">
      <p className="font-thin text-black mb-3">
        Don't have an account?{" "}
        <Link href={"/api/auth/signup"} className="text-violet-950 font-bold">
          Sign Up
        </Link>
      </p>
    </div>
  );
}
