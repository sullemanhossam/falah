import { useState } from 'react'

const dummyStudies = [
  {
    title: 'Phase II NSCLC Trial',
    status: 'Ongoing',
    fpiDate: '01 Oct 2025',
    sites: '20 / 30',
    enrollment: '78 / 200 (39%)',
    lastUpdated: '2 days ago',
  },
  {
    title: 'Phase III Melanoma Study',
    status: 'Startup',
    fpiDate: '12 Nov 2025',
    sites: '5 / 20',
    enrollment: '10 / 300 (3%)',
    lastUpdated: '3 days ago',
  },
  {
    title: 'Phase I Rare Disease Pilot',
    status: 'Completed',
    fpiDate: '15 Jan 2024',
    sites: '10 / 10',
    enrollment: '20 / 20 (100%)',
    lastUpdated: '1 week ago',
  },
  {
    title: 'Phase II Diabetes Study',
    status: 'Ongoing',
    fpiDate: '05 Mar 2025',
    sites: '18 / 25',
    enrollment: '102 / 250 (41%)',
    lastUpdated: '5 days ago',
  },
]

const filters = ['Country', 'Status', 'Phase', 'Sponsor', 'Start Date']

export default function MyStudiesTable() {
  const [filterValues, setFilterValues] = useState({})

  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">My Studies</h2>

        {/* Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-6">
          {filters.map((filter) => (
            <select
              key={filter}
              className="w-full rounded-md border-gray-300 text-sm text-gray-700 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              onChange={(e) =>
                setFilterValues((prev) => ({ ...prev, [filter]: e.target.value }))
              }
            >
              <option value="">{filter}</option>
              <option value="Example 1">{filter} Option 1</option>
              <option value="Example 2">{filter} Option 2</option>
            </select>
          ))}
        </div>

        {/* Table */}
        <div className="overflow-x-auto bg-white border rounded-lg shadow-sm">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <tr>
                <th className="px-6 py-3">Study Title</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">FPI Date</th>
                <th className="px-6 py-3">Sites Activated</th>
                <th className="px-6 py-3">Enrollment</th>
                <th className="px-6 py-3">Last Updated</th>
                <th className="px-6 py-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {dummyStudies.map((study, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-medium">{study.title}</td>
                  <td className="px-6 py-4">{study.status}</td>
                  <td className="px-6 py-4">{study.fpiDate}</td>
                  <td className="px-6 py-4">{study.sites}</td>
                  <td className="px-6 py-4">{study.enrollment}</td>
                  <td className="px-6 py-4">{study.lastUpdated}</td>
                  <td className="px-6 py-4 text-center space-x-2">
                    <button className="text-indigo-600 hover:underline text-sm font-medium">View Study</button>
                    <button className="text-gray-500 hover:text-gray-700 text-sm font-medium">Download Report</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}