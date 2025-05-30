export default function FooterSection() {
  const footerLinks = {
    Services: ['Budget Templates', 'Cost Comparison', 'Smart Contracts'],
    Company: ['About ClinConnect', 'Careers', 'Contact Us'],
    Resources: ['Knowledge Center', 'Clinical Trials 101', 'Help & Support'],
    Partners: ['REACT Alliance', 'MedTech Europe', 'WHO ICTRP'],
  }

  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm">
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <div key={idx}>
              <h4 className="text-white font-semibold mb-4">{section}</h4>
              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline hover:text-white transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ClinConnect. All rights reserved.
        </div>
      </div>
    </footer>
  )
}