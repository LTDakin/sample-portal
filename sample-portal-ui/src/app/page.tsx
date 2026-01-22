"use client";
import { findSampleById, updateSample } from "@/services/samples";
import { PatchSampleRequest, SampleResponse } from "@/types/samples.api";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "use-debounce";
import Sample from "./Sample";
import SampleDataEntry from "./SampleDataEntry";

export default function Home() {
  const [sampleId, setSampleId] = useState("");
  const [debouncedSampleId] = useDebounce(sampleId, 500);
  const [sample, setSample] = useState<SampleResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!debouncedSampleId) return;

    const fetchSample = async () => {
      try {
        setError(null);
        setSample(null);
        const sample = await findSampleById(debouncedSampleId);
        setSample(sample);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "An unknown error occurred"
        );
      }
    };

    fetchSample();
  }, [debouncedSampleId]);

  function handleSubmitSampleData(date: string, notes: string | null) {
    dialogRef.current?.close();

    if(sampleId === null) {
      console.error("Sample ID is null");
      return;
    }

    notes = notes ? notes : '';

    const data: PatchSampleRequest = { 
      sample_id: sampleId,
      collection_date: date,
      notes: notes ? notes : ''
     };

    updateSample(data);
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans">
      {sample && (
        <dialog ref={dialogRef} className="m-auto rounded-lg p-0 shadow-2xl backdrop:bg-black/40 backdrop:backdrop-blur-sm" closedby="any">
          <SampleDataEntry onSubmitData={handleSubmitSampleData}/>
        </dialog>
      )}
      <main className="flex w-full max-w-5xl flex-row items-start justify-between py-32 px-16 bg-white">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Search for a Sample ID.
          </h1>
          <div className="flex flex-row gap-6 items-center">
            <input
              type="text"
              placeholder="Enter Sample ID"
              className="w-full max-w-xs rounded border border-gray-300 px-4 py-2 text-black"
              value={sampleId}
              onChange={(e) => setSampleId(e.target.value)}
            />
          </div>
        </div>
        {sample && (
          <Sample name={sample.name} dateOfBirth={sample.date_of_birth} onEnterData={() => dialogRef.current?.showModal()}/>
        )}
        {error && <p className="text-red-500 mt-16">{error}</p>}
      </main>
    </div>
  );
}
