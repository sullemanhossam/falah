export default function HowItWorksSection() {
  const steps = [
    {
      title: 'Step 1 – Create Your Account',
      description: 'Sponsors and CROs sign up with role-based access.',
    },
    {
      title: 'Step 2 – Post or Respond to a Study RFP',
      description: 'Sponsors submit study outlines. CROs upload capabilities and cost data.',
    },
    {
      title: 'Step 3 – Compare & Contract',
      description:
        'Sponsors compare proposals and timelines. ClinConnect facilitates the contracting and payment process.',
    },
    {
      title: 'Step 4 – Collaborate and Monitor',
      description:
        'Once matched, both parties track delivery, payments, and key study metrics.',
    },
  ]

  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From Proposal to First Patient In—Made Simple.
          </h2>
        </div>

        <ol className="space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16 sm:space-y-0 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={index} className="relative pl-10">
              <div className="absolute left-0 top-1 h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}