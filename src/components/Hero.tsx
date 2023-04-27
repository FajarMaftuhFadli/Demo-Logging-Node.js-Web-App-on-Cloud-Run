export default function Hero() {
  return (
    <section>
      <div className="bg-cyan-600">
        <div className="container mx-auto flex flex-col items-center px-4 py-16 pb-24 text-center text-gray-900 md:px-10 md:py-32 lg:px-32 lg:pb-56">
          <h1 className="text-5xl font-bold leading-none text-gray-50 sm:text-6xl xl:max-w-3xl">
            Build a Scalable, Secure, and Flexible Digital Infrastructure with
            FISClouds
          </h1>
          <p className="mb-8 mt-6 text-lg text-gray-50 sm:mb-12 xl:max-w-3xl">
            Transform your business with our comprehensive cloud technology
            solutions. Our end-to-end digital infrastructure services pave the
            way for a brighter, more efficient future for your enterprise.
            Better technology, better tomorrow!
          </p>
          <div className="flex flex-wrap justify-center">
            <button
              type="button"
              className="m-2 rounded bg-gray-100 px-8 py-3 text-lg font-semibold text-gray-900"
            >
              Get started
            </button>
            <button
              type="button"
              className="m-2 rounded border border-gray-300 px-8 py-3 text-lg text-gray-50"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
      <img
        src="https://source.unsplash.com/random/480x320"
        alt=""
        className="mx-auto -mt-20 mb-12 w-5/6 rounded-lg bg-gray-500 shadow-md lg:-mt-40"
      />
    </section>
  );
}
