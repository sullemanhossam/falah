export default function WhoItsForSection() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Built for the Entire Clinical Trial Ecosystem
        </h2>

        <div className="mt-12 grid gap-12 md:grid-cols-2">
          {/* Left Column: Sponsors */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Design better studies. Choose better partners.</h3>
            <p className="mt-4 text-gray-600">
              Whether you’re a pharma innovator, biotech startup, or medtech sponsor, ClinConnect helps you instantly find,
              compare, and contract with CROs worldwide. Streamline feasibility, accelerate startup, and manage study
              delivery from one central platform.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">•</span>
                Post trial proposals in minutes
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">•</span>
                Compare CRO bids using a harmonized cost grid
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">•</span>
                Track performance and milestones in real time
              </li>
            </ul>
          </div>

          {/* Right Column: CROs */}
          <div>
            <h3 className="text-xl font-semibold text-indigo-600">Showcase your strengths. Win the right studies.</h3>
            <p className="mt-4 text-gray-600">
              Gain visibility with high-quality sponsors actively sourcing services. ClinConnect gives you the tools to
              present your regional expertise, optimize pricing, and collaborate efficiently through secure digital workflows.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">•</span>
                Build a searchable profile with your capabilities
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">•</span>
                Receive matched RFPs from qualified sponsors
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-indigo-600">•</span>
                Collaborate through smart contracting & dashboards
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="rounded-md bg-indigo-600 px-8 py-3 text-base font-medium text-white shadow hover:bg-indigo-700"
          >
            Explore How It Works
          </a>
        </div>
      </div>
    </section>
  )
}