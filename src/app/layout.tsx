import { Antonio, League_Spartan } from "next/font/google";
import { Header } from "../components/Header";
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${antonio.variable} ${spartan.variable} flex min-h-screen flex-col items-center bg-black bg-stars font-spartan text-white`}
      >
        <Header />
        <main className="flex-grow w-full">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
