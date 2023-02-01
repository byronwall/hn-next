import "../styles/globals.css";
import { NavBar } from "../src/components/NavBar";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>HN Offline</title>
      </head>
      <body className="max-w-2xl mx-auto ">
        <NavBar />
        <div>{children}</div>
      </body>
    </html>
  );
}
