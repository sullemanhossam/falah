import { CheckCircleIcon } from '@heroicons/react/24/solid'

const benefits = [
  'Up to 40% faster feasibility and site contracting',
  'Harmonized budgets across countries and vendors',
  'Trusted CROs, curated through the REACT Alliance',
  'Built by professionals who’ve run hundreds of trials',
]

export default function WhyClinConnectSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Why Sponsors and CROs are Choosing ClinConnect
        </h2>
        <p className="mt-6 text-xl text-gray-700 italic">
          “We were tired of guessing costs, chasing emails, and managing 12 spreadsheets at once. With ClinConnect, we
          reduced our startup timeline by 3 months and finally had full visibility.”
        </p>
      </div>

      <div className="mt-12 mx-auto max-w-3xl px-6 sm:px-8">
        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircleIcon className="h-6 w-6 text-indigo-600 flex-shrink-0" aria-hidden="true" />
              <span className="text-lg text-gray-800">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}