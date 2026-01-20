"use client";
import { useState } from "react";
import { DotSpinner } from "ldrs/react";
import "ldrs/react/DotSpinner.css";

export default function Home() {
  const [sampleId, setSampleId] = useState("");
  const [fetchingSampleId, setFetchingSampleId] = useState(false);

  function handleSampleIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSampleId(e.target.value);

    // debounce a call to the api for that sample
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-row items-start py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Search for a Sample ID.
          </h1>
          <div className="flex flex-row gap-6 items-center">
            <input
              type="text"
              placeholder="Enter Sample ID"
              className="w-full max-w-xs rounded border border-gray-300 px-4 py-2 text-black dark:bg-black dark:text-white"
              value={sampleId}
              onChange={handleSampleIdChange}
            />
            {fetchingSampleId && (
              <DotSpinner size="30" speed="0.9" color="black" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
