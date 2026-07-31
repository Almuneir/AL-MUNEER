import "./globals.css";

export const metadata = {
  title: "المنير",
  description: "منصة المنير التعليمية",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
