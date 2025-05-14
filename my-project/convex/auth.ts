import { Password } from "@convex-dev/auth/providers/Password";
import { convexAuth } from "@convex-dev/auth/server";
import { ResendOTPPasswordReset } from "./ResendOTPPasswordReset";
 
export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [Password({ reset: ResendOTPPasswordReset })],
});