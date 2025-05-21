import { useQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const navigate = useNavigate();
  const user = useQuery(api.user.getCurrentUser, {});
  const Organization  = useQuery(api.organizations.get, {});
  
  console.log(user);
  console.log(Organization);


  if (!user) {
    return <p>User must be logged in</p>;
  }

  if (!user.role) {
    // if there is no user role they havent created an org or been invited to one
    navigate("/onboarding/company-type", {});
  }


return (
  <p>with role {user.role} </p>
)

}


