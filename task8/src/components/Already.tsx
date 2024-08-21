import Link from "next/link";

export default function Already() {
  return (
    <div className="mb-3">
      <p className="font-thin text-black mb-3">
        Already have an account?{" "}
        <Link href={"/api/auth/signin"} className="text-violet-950 font-bold">
          Login
        </Link>
      </p>
      <p className="font-thin text-black">
        By clicking 'Continue' you acknowledge that you have read <br /> and
        accepted out{" "}
        <span className="text-violet-950 font-bold">Terms of Service</span> and{" "}
        <span className="text-violet-950 font-bold">Privacy Policy</span>
      </p>
    </div>
  );
}
