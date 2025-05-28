import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useNavigate } from "react-router";
import SponsorDashboard from "./sponsor";
import CroDashboard from "./cro";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useQuery(api.user.getCurrentUser, {});
  const organization = useQuery(api.organizations.get, {});

  console.log(user);
  console.log(organization);

  if (!user) {
    return <p>User must be logged in</p>;
  }

  if (!user.role) {
    // if there is no user role they havent created an org or been invited to one
    navigate("/onboarding/company-type", {});
  }

  if (organization?.type == "cro") {
    return <CroDashboard />;
  } else if (organization?.type == "sponsor") return <SponsorDashboard />;
}
