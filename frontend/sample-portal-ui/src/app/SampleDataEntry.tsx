import { useState } from "react";

interface SampleDataEntryProps {
  onSubmitData: (date: string, notes: string | null) => void;
}

export default function SampleDataEntry(props: SampleDataEntryProps) {
  const [date, setDate] = useState<string | null>(null);
  const [notes, setNotes] = useState<string>('');

  function handleSubmitData(date: string | null, notes: string) {
    if (date === null) {
      alert("Please enter a date.");
      return;
    }

    props.onSubmitData(date, notes);
  }
  
  return (
    <div className="flex flex-col gap-4 p-16 bg-white">
      <h1 className="font-semibold">Submit data for sample.</h1>
      <input className="rounded border border-gray-300 px-4 py-2 text-black" type="date" value={date || ""} onChange={(e) => setDate(e.target.value)}></input>
      <textarea className="rounded border border-gray-300 px-4 py-2 text-black" rows={4} placeholder="Notes (optional)" value={notes || ""} onChange={(e) => setNotes(e.target.value)}></textarea>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors" onClick={() => handleSubmitData(date, notes)}>Submit</button>
    </div>
  );
}
