import "../styles/globals.css";
import { NavBar } from "../src/components/NavBar";
import { AppStoreProvider } from "../src/store";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>HN Offline</title>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="max-w-2xl mx-auto p-4 sm:p-1 ">
        <AppStoreProvider>
          <NavBar />
          <div>{children}</div>
        </AppStoreProvider>
      </body>
    </html>
  );
}
