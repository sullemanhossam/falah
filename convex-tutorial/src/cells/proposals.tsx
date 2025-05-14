import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function ProposalsCell() {
  const proposals = useQuery(api.proposals.get);

  if (!proposals) {
    return <div>Loading proposals...</div>;
  }

  return (
    <div>
      {proposals.map((proposal: any) => (
        <div key={proposal._id} className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold">{proposal.title}</h3>
          <p className="text-sm text-gray-600">{proposal.summary}</p>
        </div>
      ))}
    </div>
  );
}