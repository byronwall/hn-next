import "../styles/globals.css";
import { NavBar } from "../src/components/NavBar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>HN Offline</title>
      </head>
      <body className="max-w-2xl mx-auto p-4 sm:p-1 ">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
