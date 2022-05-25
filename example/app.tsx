import React, { FC } from "react";
import { Dashboard } from "./pages/dashboard.tsx";

export default function App(
  { Page, pageProps }: { Page: FC; pageProps: Record<string, unknown> },
) {
  return (
    <main>
      <head>
        <meta name="viewport" content="width=device-width" />
      </head>
      <Dashboard />
      <h1>Hello</h1>
      {/* <Page {...pageProps} /> */}
    </main>
  );
}
