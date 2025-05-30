export default function TestimonialsAndMetricsSection() {
  const quotes = [
    {
      quote: '“The easiest CRO sourcing process I’ve ever used.”',
      author: 'Director, Clinical Operations, Mid-size Biotech',
    },
    {
      quote:
        '“Finally a budget tool that makes sense. Transparent, structured, and sponsor-friendly.”',
      author: 'CFO, Regional CRO',
    },
  ]

  const stats = [
    { label: 'CROs in 40+ countries', value: '80+' },
    { label: 'Posted projects', value: '$30M+' },
    { label: 'Digital contracting compliance', value: '100%' },
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Trusted by Leading Sponsors and CROs Around the Globe
        </h2>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {quotes.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-lg shadow">
              <p className="text-lg text-gray-700 italic">“{item.quote.replace(/“|”/g, '')}”</p>
              <p className="mt-4 text-sm font-medium text-gray-600">— {item.author}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
              <p className="mt-2 text-base text-gray-700">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}