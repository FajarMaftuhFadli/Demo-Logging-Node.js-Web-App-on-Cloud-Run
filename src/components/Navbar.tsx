import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="bg-gray-100 p-4 text-gray-800">
      <div className="container mx-auto flex h-16 justify-between">
        <a
          rel="noopener noreferrer"
          href="#"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <div className="relative">
            <Image
              src="/Logo-FISClouds-2022.png"
              width={500}
              height={500}
              alt="Logo"
              className="object-contai h-16 w-fit"
            />
          </div>
        </a>
        <div className="flex justify-between space-x-3">
          <ul className="hidden items-stretch space-x-3 md:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="-mb-1 flex items-center border-b-2 border-transparent px-4"
              >
                Services
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="-mb-1 flex items-center border-b-2 border-transparent px-4"
              >
                Solutions
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="-mb-1 flex items-center border-b-2 border-cyan-600 border-transparent px-4 text-cyan-600"
              >
                Case Studies
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="-mb-1 flex items-center border-b-2 border-transparent px-4"
              >
                Resources
              </a>
            </li>
          </ul>
          <div className="hidden flex-shrink-0 items-center lg:flex">
            <button className="rounded bg-cyan-600 px-8 py-3 font-semibold text-gray-50">
              Free Consultation
            </button>
          </div>
        </div>
        <button
          title="Hamburger menu"
          className="flex justify-end p-4 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
