interface SampleProps {
  name: string;
  dateOfBirth: string;
}

export default function Sample(props: SampleProps) {
  return (
    <>
      <div className="flex flex-col gap-4 mt-10">
        <h1 className="font-semibold">Name: {props.name}</h1>
        <h1 className="font-semibold">Date of Birth: {props.dateOfBirth}</h1>
      </div>
      <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mt-15">
        Confirm
      </button>
    </>
  );
}
