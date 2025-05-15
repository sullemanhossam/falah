import { useAuthActions } from "@convex-dev/auth/react";
import { useState } from "react";
import Register from "./register";
import Login from "./login";

export function Authenticate() {
  const { signIn } = useAuthActions();
  const [step, setStep] = useState<"signUp" | "signIn">("signIn");

  if (step == "signUp") {
    return <Register setStep step signIn />;
  } else {
    return <Login setStep step signIn />;
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        void signIn("password", formData);
      }}
    >
      <input name="email" placeholder="Email" type="text" />
      <input name="password" placeholder="Password" type="password" />
      <input name="flow" type="hidden" value={step} />
      <button type="submit">{step === "signIn" ? "Sign in" : "Sign up"}</button>
      <button
        type="button"
        onClick={() => {
          setStep(step === "signIn" ? "signUp" : "signIn");
        }}
      >
        {step === "signIn" ? "Sign up instead" : "Sign in instead"}
      </button>
    </form>
  );
}
