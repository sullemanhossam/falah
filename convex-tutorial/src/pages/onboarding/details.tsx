import { useMutation } from "convex/react";
import { useState } from "react";
import { useLocation } from "react-router";
import { api } from "../../../convex/_generated/api";

export default function Details() {
  const location = useLocation();
  const { companyType, employeeCount } = location.state || {};
  const createOrganization = useMutation(api.organizations.createOrganization);

  const [formData, setFormData] = useState({
    name: "",
  });


    const isFormValid = Object.values(formData).every((val) => val.trim() !== "");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      companyType,
      employeeCount,
    };

    console.log("Submitted Form Data:", submissionData);

   await createOrganization({ name: formData.name, type: companyType, companySize:employeeCount });


  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Hidden Inputs for flow tracking */}

      <div className="space-y-12 border-b border-gray-900/10 pb-12">
        <h2 className="text-base font-semibold text-gray-900">Organization</h2>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          {/* Name Field */}
          <div className="sm:col-span-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

      
        </div>

        <div className="mt-6">
          <button
          disabled={!isFormValid}
            type="submit"
            className="inline-flex items-center rounded-md bg-indigo-600 px-4 py-2 text-white text-sm font-semibold shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}