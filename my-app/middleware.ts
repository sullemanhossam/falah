import {
  convexAuthNextjsMiddleware,
  createRouteMatcher,
  nextjsMiddlewareRedirect,
} from "@convex-dev/auth/nextjs/server";

// // Define which routes are publicly accessible without authentication
// const isPublicPage = createRouteMatcher([
//   "/",
//   "/about", // Add any additional public routes here
// ]);

// Define which routes are related to authentication (e.g., sign-in page)
const isAuthPage = createRouteMatcher([
  "/authenticate", // You can add more auth-related routes if needed
]);

// Export the middleware
export default convexAuthNextjsMiddleware(async (request, { convexAuth }) => {
  // Check if the user is authenticated
  const authenticated = await convexAuth.isAuthenticated();

  if (!authenticated) {
    if (isAuthPage(request)) {
      return
    }
    return nextjsMiddlewareRedirect(request, "/authenticate");
    
  }
  return;
});

// Apply middleware to all routes EXCEPT static files like .js, .css, _next/* etc.
// This ensures middleware doesn't unnecessarily run on static asset requests
export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except those containing a dot (.) or starting with _next
    "/",                      // Include root path
    "/(api|trpc)(.*)",        // Include API and TRPC routes
  ],
};