// Features:
// 	•	Create/manage study requests
// 	•	View/respond to CRO proposals
// 	•	Track milestones & progress
// 	•	Upload/view secured docs (NDAs/CDAs)

import { RiAddFill } from "@remixicon/react";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { myFaker } from "../../../faker";
import { production } from "../../../../mode";
export default function SponsorDashboard() {
  function MyStudyRequestsCell() {
    let study_requests = useQuery(api.study_requests.getOurStudyRequests);
    // study_requests = production ? study_requests : myFaker.study_requests
    console.log();
    // there are no study requests to see
    if (!study_requests?.length) {
      return (
        <div className="relative">
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <li
                key={index}
                className={`h-44 rounded-lg bg-gray-100 dark:bg-gray-800 ${
                  index > 1 ? "hidden sm:block" : ""
                }`}
              />
            ))}
          </ul>

          {/* Overlay message with gradient background */}
          <div className="absolute inset-x-0 bottom-0 flex h-32 flex-col items-center justify-center bg-gradient-to-t from-white to-transparent dark:from-gray-950">
            <p className="font-medium text-gray-800 dark:text-gray-100">
              No study requests created yet
            </p>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Create your first study request to get started
            </p>
            <a
              type="button"
              className="mt-6 inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              <RiAddFill className="-ml-1 h-5 w-5" aria-hidden="true" />
              Create
            </a>
          </div>
        </div>
      );
    }

    return (
      <>
        <p>study requetss{JSON.stringify(study_requests)}</p>
      </>
    );
  }

  return (
    <>
      {/* we would like to show the study request cells created by their organisation  */}
      <MyStudyRequestsCell />
      {/* <ProposalsCell />
      <MilestonesCell /> */}
    </>
  );
}
