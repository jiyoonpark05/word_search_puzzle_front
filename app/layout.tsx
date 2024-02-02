import type { Metadata } from "next";
import { themeClass } from "./theme.css";
import * as css from "./layout.css";
import { Header } from "./components/header";
import RecoilRootWrapper from "./recoilRootWrapper";
import Head from "next/head";

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
        <RecoilRootWrapper>
          <main className={css.mainStlye}>{children}</main>
        </RecoilRootWrapper>
      </body>
    </html>
  );
}
