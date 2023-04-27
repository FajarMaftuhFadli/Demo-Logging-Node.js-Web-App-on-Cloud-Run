export default function CallToAction() {
  return (
    <section className="bg-gray-100 py-6 text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center space-y-8 p-4 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-center text-5xl font-bold leading-none">
          Sign up now
        </h1>
        <p className="text-center text-xl font-medium">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-8 sm:space-y-0">
          <button className="rounded bg-cyan-600 px-8 py-3 text-lg font-semibold text-gray-50">
            Get started
          </button>
          <button className="rounded border border-gray-700 bg-gray-800 px-8 py-3 text-lg font-normal text-gray-50">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
}
