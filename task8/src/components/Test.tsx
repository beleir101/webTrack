"use client";

import { signIn } from "next-auth/react";

export default function Test() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign up with Google</button>
    </div>
  );
}
