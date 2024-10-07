import { CalendarDays } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <main className="container">
      <header className="flex gap-4 justify-between py-6 text-gray-800">
        <div className="flex gap-10 items-center">
          <Link
            href={"/"}
            className="text-blue-700 font-bold text-xl flex gap-1 items-center"
          >
            <CalendarDays size={24} />
            Scheduling
          </Link>
          <nav className="flex gap-4">
            <Link href={"/features"}>Features</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/pricing"}>Pricing</Link>
          </nav>
        </div>
        <nav className="flex gap-4 items-center">
          <Link href={"/features"}>Sign in</Link>
          <Link
            href={"/about"}
            className="bg-blue-600 text-white py-2 px-4 rounded-full"
          >
            Get started
          </Link>
        </nav>
      </header>
    </main>
  );
}
