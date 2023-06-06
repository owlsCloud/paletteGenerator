"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const { push } = useRouter();
  return (
    <>
      <div className="h-full w-full flex flex-col text-center">
        <h1 className="text-4xl mt-12 mb-4">Welcome to palette generator</h1>
        <p className="text-lg">
          Click the generate button to reveal a random 5 color palette.
        </p>
        <button
          className="border w-auto m-auto px-4 py-2 rounded-lg hover:bg-yellow-100"
          onClick={() => {
            push("/generate");
          }}
        >
          Generate
        </button>
      </div>
    </>
  );
}
