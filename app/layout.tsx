import NavBarGeneral from "@/components/NavBar/NavBarGeneral";
import FooterGeneral from "@/components/Footer/FooterGeneral";
import "./globals.css";

export const metadata = {
    title: "Haaris Toor's Portfolio",
    description: "Haaris Toor's' Software Developer Portfolio Website",
    icons: {
        icon: "/images/profile.png",
    }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBarGeneral />
        {children}
        <FooterGeneral />
      </body>
    </html>
  );
}