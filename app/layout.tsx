import "./globals.css";

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
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen bg-background flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
