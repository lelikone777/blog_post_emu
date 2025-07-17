import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default async function DashboardRoute() {
  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
    </div>
  );
}
