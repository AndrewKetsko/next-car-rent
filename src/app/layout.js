import "./globals.css";
import { MainNavigation } from "@/components/MainNavigation/MainNavigation";
import Providers from "@/components/Providers/Providers";

export const metadata = {
  title: "Rent a car",
  description: "Generated by create next app",
};

export default function RootLayout(props) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          <div className="relative">
            <MainNavigation />
          </div>
          <div className="pt-24">{props.children}</div>
          {props.modal}
        </Providers>
      </body>
    </html>
  );
}
