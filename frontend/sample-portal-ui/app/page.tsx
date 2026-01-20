export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-5xl flex-row items-start py-32 px-16 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Search for a Sample ID.
          </h1>
          <input
            type="text"
            placeholder="Enter Sample ID"
            className="w-full max-w-xs rounded border border-gray-300 px-4 py-2 text-black dark:bg-black dark:text-white"
          />
          <button className="flex h-12 items-center justify-center rounded-full bg-foreground px-16 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]">
            Search
          </button>
        </div>
      </main>
    </div>
  );
}
