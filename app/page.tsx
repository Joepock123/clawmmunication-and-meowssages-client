export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
          <li>
            See your next delivery details{" "}
            <a
              className="text-green-600 hover:text-green-800 underline"
              href="/welcome/ff535484-6880-4653-b06e-89983ecf4ed5"
            >
              here
            </a>
            .
          </li>
        </ul>
      </main>
    </div>
  );
}
