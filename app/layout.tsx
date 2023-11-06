import "./globals.css";
import { cookies } from "next/headers";
export const metadata = {
  title: "MediaTale",
  description:
    "MediaTale a small Media platform to post and share as you wish!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = cookies().get("theme");
  return (
    <html lang="en" className={theme === undefined ? theme : ""}>
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center overflow-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}
