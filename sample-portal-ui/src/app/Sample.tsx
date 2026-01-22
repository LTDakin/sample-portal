interface SampleProps {
  name: string;
  dateOfBirth: string;
  collectionDate?: string;
  notes?: string;
  onEnterData: () => void;
}

export default function Sample(props: SampleProps) {
  return (
    <>
      <div className="flex flex-col gap-4  h-10">
        <h1 className="font-bold">Name: {props.name}</h1>
        <h1 className="font-bold">Date of Birth: {props.dateOfBirth}</h1>
        {props.collectionDate && (
          <h1 className="font-bold">Collection Date: {props.collectionDate}</h1>
        )}
        {props.notes && <h1 className="font-bold">Notes: {props.notes}</h1>}
      </div>
      <button
        className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mt-15"
        onClick={props.onEnterData}
      >
        Enter Data
      </button>
    </>
  );
}
