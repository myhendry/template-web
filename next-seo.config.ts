// https://github.com/garmeeh/next-seo

export const DefaultSeoValues = {
  title: "Corporate Space HQ",
  description: "More information on corporate space HQ.",
  titleTemplate: "%s | Next SEO",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://www.url.ie/",
    site_name: "NextSeo",
  },
  twitter: {
    handle: "@lim",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "google-site-verification",
      content: process.env.GOOGLE_SITE_VERIFICATION_ID,
    },
  ],
};
