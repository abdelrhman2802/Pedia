"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-5 pt-32 text-center">
      <h1 className="display text-3xl">Something went wrong.</h1>
      <p className="mt-3 text-mist">Your notes and quiz history are safe. Try loading the page again.</p>
      <button onClick={reset} className="accent-grad mt-8 rounded-full px-6 py-3 font-medium text-ink">Reload page</button>
    </div>
  );
}
