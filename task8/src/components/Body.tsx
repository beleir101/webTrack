"use client";

import Google from "./Google";
import Header from "./Header";
import MainBoard from "./MainBoard";
import Option from "./Option";
import { signIn } from "next-auth/react";

export default function Body() {
  return (
    <div
      className=" bg-slate-50 flex-col overflow-auto"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
      }}
    >
      <Header show={"Sign Up Today!"} />
      <div className="flex justify-center">
        <Google wrd={"Sign Up with google"} />
      </div>

      <Option word={"Or Sign Up with Email"} />
      <MainBoard />
    </div>
  );
}
