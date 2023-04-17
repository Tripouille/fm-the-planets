import { BurgerMenu } from "@/components/BurgerMenu";
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

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${antonio.variable} ${spartan.variable} flex min-h-screen flex-col items-center bg-black font-spartan text-white`}
      >
        <header className="relative flex w-full justify-between px-6 py-4">
          <p className="text-3xl">THE PLANETS</p>

          <BurgerMenu />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
