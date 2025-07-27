import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { RegisterLink, LoginLink, LogoutLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';

export async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav className="itcems-center flex justify-between py-5">
      <div className="itcems-center flex gap-6">
        <Link href="/">
          <h1 className="text-3xl font-bold text-blue-500">LOGO</h1>
        </Link>

        <div className="flex items-center gap-6">
          <Link className="transition-colors hover:text-blue-500" href="/">
            Home
          </Link>
          <Link className="transition-colors hover:text-blue-500" href="/dashboard">
            Dashboard
          </Link>
        </div>
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: 'secondary' })}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="ictems-center flex gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>

          <RegisterLink className={buttonVariants({ variant: 'secondary' })}>Sign up</RegisterLink>
        </div>
      )}
    </nav>
  );
}
