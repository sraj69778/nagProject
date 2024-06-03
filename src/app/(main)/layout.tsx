import type { Metadata } from "next";
import SideNav from "./page-components/Side-Nav";

export const metadata: Metadata = {
  title: "Discuz",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
      </head>
      <body className="bg-[#b5c2ca]">
        <div className="flex">
          <SideNav />
          {children}
        </div>
      </body>
    </html>
  );
}
