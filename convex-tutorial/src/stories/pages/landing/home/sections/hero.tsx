import Navbar from "../../navbar"


function BackgroundPattern() {
  return (
    <div aria-hidden="true" className="hidden sm:absolute sm:inset-y-0 sm:block sm:size-full">
      <div className="relative mx-auto h-full max-w-7xl">
        {/* Left pattern */}
        <svg
          fill="none"
          width={404}
          height={784}
          viewBox="0 0 404 784"
          className="absolute right-full translate-x-1/4 translate-y-1/4 transform lg:translate-x-1/2"
        >
          <defs>
            <pattern id="pattern-left" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#pattern-left)" />
        </svg>

        {/* Right pattern */}
        <svg
          fill="none"
          width={404}
          height={784}
          viewBox="0 0 404 784"
          className="absolute left-full -translate-x-1/4 -translate-y-3/4 transform md:-translate-y-1/2 lg:-translate-x-1/2"
        >
          <defs>
            <pattern id="pattern-right" x={0} y={0} width={20} height={20} patternUnits="userSpaceOnUse">
              <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#pattern-right)" />
        </svg>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gray-50">
      <BackgroundPattern />

      <div className="relative pb-16 pt-6 sm:pb-24">

        <main className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Where Clinical Trials Connect</span>{' '}
              <span className="block text-indigo-600 xl:inline">with the Right Partners.</span>
            </h1>
            <p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
              Accelerate your study timelines. Compare CROs. Manage costs transparently.
              <br />
              All in one unified platform for sponsors and CROs.
            </p>
            <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 md:px-10 md:py-4 md:text-lg"
                >
                  Start Now – It’s Free
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:ml-3 sm:mt-0">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-indigo-600 hover:bg-gray-50 md:px-10 md:py-4 md:text-lg"
                >
                  Login
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}