import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <nav className="py-5 flex itcems-center justify-between">
      <div className="flex itcems-center gap-6">
        <Link href="/public">
          <h1 className="text-3xl text-blue-500 font-bold">LOGO</h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link className="hover:text-blue-500 transition-colors" href="/public">
            Home
          </Link>
          <Link
            className="hover:text-blue-500 transition-colors"
            href="/dashboard"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex ictems-center gap-4">
        <Button>Login</Button>
        <Button variant="secondary">Sign up</Button>
      </div>
    </nav>
  );
}
