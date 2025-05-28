import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();
  //  const employee = useQuery(api.employee.get, {});
  // Here we will get the employee record for the authenticated user

  // if (employee === null) {
  //   navigate('/onboarding/company-type');
  // }

  //  we want to check if the user id is an employee or a admin of a org if not create an org through onboarding

  return <></>;
}
