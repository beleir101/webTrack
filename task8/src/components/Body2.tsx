"use client";
import Form2 from "./Form2";
import Google from "./Google";
import Header from "./Header";
import Last from "./Last";
import Option from "./Option";

export default function Body2() {
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
      <Header show={"Welcome Back,"} />
      <div className="flex justify-center mt-4">
        <div className="flex w-1/2">
          <div className="card  rounded-box grid h-20 flex-grow place-items-center">
            <Google wrd={"Continue with google"} />
            <Option word={""} />
            <Form2 />
            <Last />
          </div>
        </div>
      </div>
    </div>
  );
}
