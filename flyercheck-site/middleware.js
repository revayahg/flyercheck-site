export const config = { matcher: "/:path*" };

export default function middleware(request) {
  const host = request.headers.get("host")?.split(":")[0];
  if (host === "flyercheck.io") {
    const url = new URL(request.url);
    url.protocol = "https:";
    url.host = "www.flyercheck.io";
    return Response.redirect(url.toString(), 308);
  }
}
