import type { Metadata } from "next";
import { themeClass } from "./theme.css";
import * as css from "./layout.css";

import { Header } from "./components/header";

export const metadata: Metadata = {
  title: "Puzzle! Puzzle!",
  description: "Let's learn foreign languege with word search puzzle!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={themeClass}>
      <body className={css.background}>
        <Header />
        <main className={css.mainStlye}>{children}</main>
      </body>
    </html>
  );
}
