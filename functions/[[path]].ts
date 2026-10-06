export const onRequest: PagesFunction = async (context) => {
  const url = new URL(context.request.url);

  const isPagesDevHost =
    url.hostname === "funtoykingdom.pages.dev" ||
    url.hostname.endsWith(".funtoykingdom.pages.dev");

  if (isPagesDevHost) {
    url.hostname = "funtoykingdom.com";
    url.protocol = "https:";

    return Response.redirect(url.toString(), 301);
  }

  return context.next();
};
