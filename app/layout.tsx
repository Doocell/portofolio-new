import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Dany Risky Ardiansyah - Front-End Developer & UI/UX Designer",
  description: "Crafting code & digital experiences. Portfolio of Dany Risky Ardiansyah - Front-End Developer & UI/UX Designer.",
  keywords: ["Dany Risky Ardiansyah", "Front-End Developer", "UI/UX Designer", "React", "Next.js", "TypeScript", "Tailwind CSS", "Portfolio"],
  authors: [{ name: "Dany Risky Ardiansyah" }],
  openGraph: {
    title: "Dany Risky Ardiansyah - Portfolio",
    description: "Crafting Code & Experiences - Front-End Developer & UI/UX Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased">{children}</body>
    </html>
  );
}
