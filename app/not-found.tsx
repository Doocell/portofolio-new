import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center text-center p-6 text-on-surface">
      <div className="p-8 bg-surface-container-lowest rounded-3xl border-[3px] border-on-surface shadow-[6px_6px_0px_#111111] max-w-md">
        <h1 className="font-display text-6xl text-secondary-container mb-4">404</h1>
        <h2 className="font-headline-lg text-2xl mb-2">Page Not Found</h2>
        <p className="font-body-md text-on-surface-variant mb-6">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-tertiary-fixed text-on-tertiary-fixed font-headline-sm rounded-full border-[2.5px] border-on-surface shadow-[4px_4px_0px_#111111] hover:-translate-y-0.5 transition-transform uppercase"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

