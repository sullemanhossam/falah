import {
  SparklesIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'AI Matching',
    description:
      'Get auto-matched with the right CROs or sponsors based on therapeutic area, region, and timeline.',
    icon: SparklesIcon,
  },
  {
    name: 'Cost Comparison Grid',
    description:
      'Evaluate proposals with our harmonized cost structure—see true value beyond just price.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Blockchain Payments',
    description:
      'Smart contracts and automated payments reduce admin burden and ensure trust.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Milestone Dashboards',
    description:
      'Stay on top of contracting, regulatory, site activation, and recruitment in real time.',
    icon: ChartBarIcon,
  },
  {
    name: 'REACT CRO Network',
    description:
      'Leverage our trusted consortium of pre-qualified CROs across 40+ countries.',
    icon: GlobeAltIcon,
  },
]

export default function PlatformHighlightsSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Features That Save Time, Reduce Cost, and Build Trust
          </h2>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-md bg-indigo-100 text-indigo-600">
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-1 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}