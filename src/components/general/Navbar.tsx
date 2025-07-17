import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="py-5 flex itcems-center justify-between">
      <div className="flex itcems-center gap-6">
        <Link href="/public">
          <h1 className="text-3xl text-blue-500 font-bold">LOGO</h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link
            className="hover:text-blue-500 transition-colors"
            href="/public"
          >
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

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>
            Logout
          </LogoutLink>
        </div>
      ) : (
        <div className="flex ictems-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>

          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign up
          </RegisterLink>
        </div>
      )}
    </nav>
  );
}
