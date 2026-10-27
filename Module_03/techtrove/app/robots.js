export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/cart", "/checkout", "/orders", "/admin"],
    },
    sitemap: "https://techtrove.vercel.app/sitemap.xml",
  };
}