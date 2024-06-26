import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/favicon.ico",
    "events/:id",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
    "/assets/images/logo.svg",
    "/assets/images/hero.png",
    "/assets/images/dotted-pattern.png",
    "/sign-in"
  ],
  ignoredRoutes: [
    "/favicon.ico",
    "/api/webhook/clerk",
    "/api/webhook/stripe",
    "/api/uploadthing",
    "/assets/images/logo.svg",
    "/assets/images/hero.png",
    "/assets/images/dotted-pattern.png",
    "/sign-in"
  ]
});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};