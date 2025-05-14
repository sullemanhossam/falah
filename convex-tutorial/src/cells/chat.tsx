import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export default function GetProposals() {
  const proposals = useQuery(api.proposals.get);
  return proposals
}