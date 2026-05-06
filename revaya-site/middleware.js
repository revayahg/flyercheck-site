/** Edge middleware: force /flyercheck off the corporate domain (belt-and-suspenders with vercel.json). */
export default function middleware(request) {
  const url = new URL(request.url);
  const path = url.pathname.replace(/\/$/, "") || "/";
  if (path === "/flyercheck") {
    return Response.redirect("https://www.flyercheck.io/", 308);
  }
}

export const config = {
  matcher: ["/flyercheck", "/flyercheck/"],
};
