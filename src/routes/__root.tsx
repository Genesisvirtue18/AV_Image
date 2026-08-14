import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingActions } from "@/components/site/FloatingActions";
import { CONTACT } from "@/lib/contact";
import { SITE_IMAGES } from "@/lib/images";

import appCss from "../styles.css?url";

const SITE_URL = "https://av-image.vercel.app";
const SITE_TITLE = "Apoorva Verma — Image Consultant & Soft Skills Trainer";
const SITE_DESCRIPTION =
  "Certified image consultant, soft skills trainer and CELTA-certified English language trainer for corporate teams, institutions and professionals.";
const OG_IMAGE = SITE_IMAGES.og;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: CONTACT.name,
  image: OG_IMAGE,
  jobTitle: "Image Consultant, Soft Skills Trainer and English Language Trainer",
  email: CONTACT.email,
  telephone: CONTACT.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Delhi",
    addressCountry: "IN",
  },
  knowsAbout: [
    "Image Management",
    "Soft Skills Training",
    "Executive Presence",
    "Corporate Communication",
    "Workplace Etiquette",
    "English Language Training",
    "Personal Branding",
  ],
  sameAs: [CONTACT.instagram, CONTACT.linkedin, CONTACT.facebook],
};

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#business`,
  name: "A.V Image Management",
  url: SITE_URL,
  image: OG_IMAGE,
  logo: `${SITE_URL}${SITE_IMAGES.favicon}`,
  description: SITE_DESCRIPTION,
  founder: { "@id": `${SITE_URL}/#person` },
  areaServed: ["Delhi", "India", "Online"],
  email: CONTACT.email,
  telephone: CONTACT.phone,
  sameAs: [CONTACT.instagram, CONTACT.linkedin, CONTACT.facebook],
  serviceType: [
    "Corporate Training",
    "Image Management",
    "Soft Skills Training",
    "Executive Presence Training",
    "Communication Skills Training",
    "Workplace Etiquette Training",
    "English Language Training",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: "A.V Image Management",
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  publisher: { "@id": `${SITE_URL}/#business` },
  inLanguage: "en-IN",
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESCRIPTION },
      { name: "author", content: "Apoorva Verma" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { name: "theme-color", content: "#0f0f0f" },
      { name: "keywords", content: "Apoorva Verma, AV Image Management, image consultant Delhi, soft skills trainer, corporate training Delhi, executive presence training, workplace etiquette, CELTA English trainer" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:description", content: "Corporate training, image management, soft skills and English language coaching by Apoorva Verma." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "A.V Image Management" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:secure_url", content: OG_IMAGE },
      { property: "og:image:type", content: "image/jpeg" },
      { property: "og:image:width", content: "1080" },
      { property: "og:image:height", content: "1920" },
      { property: "og:image:alt", content: "Apoorva Verma, founder of A.V Image Management" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SITE_TITLE },
      { name: "twitter:description", content: "Corporate training, image management, soft skills and English language coaching by Apoorva Verma." },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Apoorva Verma, founder of A.V Image Management" },
      { "script:ld+json": personJsonLd },
      { "script:ld+json": serviceJsonLd },
      { "script:ld+json": websiteJsonLd },
    ],
    links: [
      { rel: "icon", type: "image/jpeg", href: SITE_IMAGES.favicon },
      { rel: "apple-touch-icon", href: SITE_IMAGES.primary },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main className="pt-20">
        <Outlet />
      </main>
      <Footer />
      <FloatingActions />
    </QueryClientProvider>
  );
}
