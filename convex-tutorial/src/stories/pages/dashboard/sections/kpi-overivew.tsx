const KPIS = [
  {
    title: 'Active Studies',
    value: '24',
    description: 'Number of studies currently open or in progress',
  },
  {
    title: 'Enrollment Progress',
    value: '68%',
    description: '% of patients enrolled vs. total planned',
  },
  {
    title: 'Avg. Startup Time',
    value: '45 days',
    description: 'Median time from RFP to FPI across all studies',
  },
  {
    title: 'Milestones On Time',
    value: '92%',
    description: '% of study milestones completed on or before target dates',
  },
  {
    title: 'Payments Executed',
    value: '$12.6M / $14.3M',
    description: 'Total value paid to CROs vs. expected contract value',
  },
]

export default function KPIOverview() {
  return (
    <section className="bg-white py-6 sm:py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {KPIS.map((kpi, idx) => (
            <div
              key={idx}
              className="rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-sm hover:shadow-md transition"
            >
              <h4 className="text-sm font-medium text-gray-500">{kpi.title}</h4>
              <p className="mt-1 text-2xl font-semibold text-indigo-600">{kpi.value}</p>
              <p className="mt-2 text-xs text-gray-400">{kpi.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}