import { Antonio, League_Spartan } from "next/font/google";
import "./globals.css";

const antonio = Antonio({
  subsets: ["latin"],
  variable: "--font-antonio",
});

const spartan = League_Spartan({
  subsets: ["latin"],
  variable: "--font-spartan",
});

export const metadata = {
  title: "The planets",
  description: "Frontend Mentor Challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${antonio.variable} ${spartan.variable} font-spartan`}>
        <main className="grid min-h-screen place-items-center">{children}</main>
      </body>
    </html>
  );
}
