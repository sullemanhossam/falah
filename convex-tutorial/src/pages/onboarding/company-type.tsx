import React, { useState } from "react";
import { useNavigate } from "react-router";

const companyType = [
  {
    value: "cro",
    label: "Clinical Research Organization",
  },
  { value: "sponsor", label: "Sponsor" },
];

export default function CompanyType() {
  const [selectedCompanyType, setSelectedCompanyType] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      console.log("Form submitted with employee count:", selectedCompanyType);
      // pass the selected company type through react routers props so the next page can access this
      navigate("/onboarding/employees", {
        state: { companyType: selectedCompanyType },
      });
    }, 600);
  };

  return (
    <main className="max-w-xl mx-auto p-4">
      <div className="animate-fade-in">
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-50">
          What type of organization are you?
        </h1>
        <p className="mt-6 text-gray-700 dark:text-gray-300">
          This will help us customize the experience to you.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <fieldset>
          <legend className="sr-only">Select number of employees</legend>
          <div className="space-y-3">
            {companyType.map((count, index) => (
              <label
                key={count.value}
                className={`block border rounded-xl p-4 cursor-pointer transition ${
                  selectedCompanyType === count.value
                    ? "border-blue-600 bg-blue-50 dark:bg-gray-800"
                    : "border-gray-300 hover:border-blue-400"
                }`}
                style={{
                  animationDelay: `${100 + index * 50}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <input
                  type="radio"
                  name="employeeCount"
                  value={count.value}
                  checked={selectedCompanyType === count.value}
                  onChange={() => setSelectedCompanyType(count.value)}
                  className="sr-only"
                />
                <span className="text-gray-900 dark:text-gray-100">
                  {count.label}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="flex justify-between pt-4">
          <button
            type="button"
            onClick={() => navigate("/onboarding/products")}
            className="text-blue-600 hover:underline"
          >
            Back
          </button>
          <button
            type="submit"
            disabled={!selectedCompanyType || loading}
            className={`px-6 py-2 rounded-md text-white font-medium transition ${
              loading || !selectedCompanyType
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {loading ? "Submitting..." : "Continue"}
          </button>
        </div>
      </form>
    </main>
  );
}
