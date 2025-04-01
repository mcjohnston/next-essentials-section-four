import MainHeader from "@/components/shared/MainHeader";
import "./globals.css";

export const metadata = {
  title: "Home | MCJ Next Learning",
  description: "Learn how to route to different pages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main id="page">
          <MainHeader />
          {children}
        </main>
      </body>
    </html>
  );
}
