import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { I18nProvider } from "@lingui/react";
import { i18n } from "../i18n";
import { useEffect } from "react";
import AOS from "aos";
import aosCss from "aos/dist/aos.css?url";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Mon Portfolio | Creative Developer",
      },
      {
        name: "description",
        content:
          "Portfolio professionnel d'un développeur créatif spécialisé en React et design moderne.",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "stylesheet",
        href: aosCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Outfit:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: RootComponent,
});

function RootComponent() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });

    // Activation de la langue par défaut
    if (!i18n.locale) {
      i18n.activate("fr");
    }
  }, []);

  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        <I18nProvider i18n={i18n}>
          <Outlet />
        </I18nProvider>
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
