import "@/styles/globals.css";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { ToastBar, Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "light min-h-screen font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
          <div className="light relative flex flex-col h-screen">
            <Navbar />
            <main className="light text-foreground bg-background container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              <Link
                isExternal
                className="flex items-center gap-1 text-current"
                href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
                title="nextui.org homepage"
              >
                <span className="text-default-600">Powered by</span>
                <p className="text-primary">NextUI</p>
              </Link>
            </footer>
          </div>
        </Providers>
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
