"use client";
import { PiIcon } from "lucide-react";
import { signIn } from "next-auth/react";
// import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className=" font-bold">
        <button onClick={() => signIn()}>Sign In</button>
        <PiIcon />
      </div>
    </div>
  );
}
