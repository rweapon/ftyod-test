import { RefreshButton } from "@features/buttons";

export default function Home() {
  return (
    <main className="flex items-center justify-center p-8">
      <section>
        <h1 className="font-heading text-3xl font-bold">Match Tracker!</h1>
        <RefreshButton />
      </section>
    </main>
  );
}
