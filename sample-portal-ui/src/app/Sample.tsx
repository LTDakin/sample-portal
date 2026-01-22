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
        <h1 className="font-bold text-2xl">{props.name}</h1>
        <p>
          <b>Date of Birth:</b> {props.dateOfBirth}
        </p>
        {props.collectionDate && (
          <p>
            <b>Collection Date:</b> {props.collectionDate}
          </p>
        )}
        {props.notes && (
          <p>
            <b>Notes:</b> {props.notes}
          </p>
        )}
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
