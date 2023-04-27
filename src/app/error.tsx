'use client'; // Error components must be Client components

import Link from 'next/link';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <section className="flex h-full items-center bg-gray-50 p-16 text-gray-800">
      <div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
        <div className="max-w-md text-center">
          <h2 className="mb-8 text-9xl font-extrabold text-gray-400">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn&#39;t find this page.
          </p>
          <p className="mb-8 mt-4 text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            // rel="noopener noreferrer"
            href="/"
            className="rounded bg-cyan-600 px-8 py-3 font-semibold text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
