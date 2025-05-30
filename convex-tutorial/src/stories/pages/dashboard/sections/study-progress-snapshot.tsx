import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'

const studies = [
  {
    title: 'Phase II NSCLC Trial',
    progress: ['green', 'yellow', 'green'], // feasibility, startup, recruitment
    sponsorPM: 'Jane Doe',
    croPM: 'John Smith',
  },
  {
    title: 'Phase III Melanoma Study',
    progress: ['green', 'green', 'red'],
    sponsorPM: 'Alice Green',
    croPM: 'Mark Lee',
  },
  {
    title: 'Phase I Rare Disease Pilot',
    progress: ['green', 'green', 'green'],
    sponsorPM: 'Nina Ray',
    croPM: 'Carlos Xu',
  },
]

const stages = ['Feasibility', 'Startup', 'Recruitment']

const colorMap = {
  green: 'bg-green-500',
  yellow: 'bg-yellow-400',
  red: 'bg-red-500',
}

export default function StudyProgressSnapshot() {
  const [index, setIndex] = useState(0)

  const prevSlide = () => setIndex((prev) => (prev === 0 ? studies.length - 1 : prev - 1))
  const nextSlide = () => setIndex((prev) => (prev === studies.length - 1 ? 0 : prev + 1))

  const current = studies[index]

  return (
    <section className="bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Study Progress Snapshot</h2>

        <div className="relative bg-white rounded-lg shadow p-6">
          {/* Carousel Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ChevronLeftIcon className="h-5 w-5 text-gray-700" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-gray-100 hover:bg-gray-200"
          >
            <ChevronRightIcon className="h-5 w-5 text-gray-700" />
          </button>

          {/* Card Content */}
          <h3 className="text-lg font-bold text-indigo-600 mb-4">{current.title}</h3>

          {/* Progress Steps */}
          <div className="flex justify-between items-center mb-6">
            {current.progress.map((status, i) => (
              <div key={i} className="flex flex-col items-center flex-1">
                <div
                  className={`w-5 h-5 rounded-full ${colorMap[status]}`}
                  title={`${stages[i]}: ${status}`}
                ></div>
                <span className="mt-2 text-sm text-gray-600">{stages[i]}</span>
              </div>
            ))}
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
            <div>
              <p className="font-medium text-gray-900">Sponsor PM</p>
              <p>{current.sponsorPM}</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">CRO PM</p>
              <p>{current.croPM}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}