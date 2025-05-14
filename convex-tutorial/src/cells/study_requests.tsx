import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function StudyRequestsCell() {
  const study_requests = useQuery(api.study_requests.get);

  if (!study_requests) {
    return <div>Loading study requests...</div>;
  }

  return (
    <div>
      {study_requests.map((request: any) => (
        <div key={request._id} className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">{request.title}</h3>
          <p className="text-sm text-gray-600">{request.description}</p>
        </div>
      ))}
    </div>
  );
}