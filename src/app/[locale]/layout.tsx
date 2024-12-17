import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import DesktopHeader from "@/components/headers/desktopHeader/desktopHeader";
import MobileHeader from "@/components/headers/mobileHeader/mobileHeader";
import Footer from "@/components/Footer/Footer";
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="flex flex-col min-h-screen ">
        <NextIntlClientProvider messages={messages}>
          <div className="block md:hidden ">
            <MobileHeader />
          </div>
          <div className="hidden md:block ">
            <DesktopHeader lang={locale} />
          </div>
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
