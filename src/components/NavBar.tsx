import Link from "next/link";

export function NavBar() {
  return (
    <div className="flex gap-4 p-4 border border-b-red-400">
      <Link href="/">
        <div>HN Offline</div>
      </Link>

      <Link href="/day">
        <div>Day</div>
      </Link>

      <Link href="/week">
        <div>Week</div>
      </Link>
    </div>
  );
}
