export default function Features() {
  return (
    <section className="m-4 bg-gray-100 text-gray-800 md:m-8">
      <div className="container mx-auto my-6 space-y-1 p-4 text-center">
        <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
          shortcut to your dream ui
        </span>
        <h2 className="pb-3 text-3xl font-bold md:text-4xl">
          Create a stylish website in minutes
        </h2>
        <p>
          Get a jumpstart to creating your new webpage! With our fully
          responsive and carefully styled components you can get the structure
          of your website done with just a couple of clicks.
        </p>
      </div>
      <div className="container mx-auto grid justify-center gap-4 lg:grid-cols-2 xl:grid-cols-4">
        <div className="flex flex-col px-8 py-6">
          <h2 className="title-font mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
            Components
          </h2>
          <p className="mb-4 flex-1 text-base leading-relaxed text-gray-600">
            Individual components that can be re-used multiple times in your
            designs.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-cyan-600"
            href="/components"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6 lg:border-none xl:border-solid">
          <h2 className="title-font mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
            Sections
          </h2>
          <p className="mb-4 flex-1 text-base leading-relaxed text-gray-600">
            Pre-made building blocks that you can stack on top of each other
            like Legos to build a website of your own in minutes.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-cyan-600"
            href="/sections"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h2 className="title-font mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
            Templates
          </h2>
          <p className="mb-4 flex-1 text-base leading-relaxed text-gray-600">
            Full pages that showcase pieces of what you can achieve with the
            building blocks that are in this UI kit.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-cyan-600"
            href="/templates"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
        <div className="flex flex-col px-8 py-6">
          <h2 className="title-font mb-2 text-lg font-semibold text-gray-800 sm:text-xl">
            Customization
          </h2>
          <p className="mb-4 flex-1 text-base leading-relaxed text-gray-600">
            Choose your primary color from any of the Tailwind CSS 2.0 colors.
            You can also view all of the components in our light and dark
            themes.
          </p>
          <a
            className="inline-flex items-center space-x-2 text-sm text-cyan-600"
            href="/docs"
          >
            <span>Learn More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
