import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-5 pt-32 text-center">
      <p className="display text-8xl text-grad">404</p>
      <h1 className="display mt-4 text-3xl">This page isn’t in the curriculum.</h1>
      <p className="mt-3 text-mist">The topic may have moved. Browse the syllabus or search with ⌘K.</p>
      <Link href="/curriculum" className="accent-grad mt-8 inline-flex rounded-full px-6 py-3 font-medium text-ink">Open the curriculum</Link>
    </div>
  );
}
