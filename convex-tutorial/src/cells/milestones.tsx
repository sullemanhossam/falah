import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function MilestonesCell() {
  const milestones = useQuery(api.milestones.get);

  if (!milestones) {
    return <div>Loading milestones...</div>;
  }

  return (
    <div>
      {milestones.map((milestone: any) => (
        <div key={milestone._id} className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">{milestone.title}</h3>
          <p className="text-sm text-gray-600">{milestone.description}</p>
        </div>
      ))}
    </div>
  );
}
