import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { prisma } from '@/utils/db';
import { BlogPostCard } from '@/components/general/BlogPostCard';

async function getData(userId: string) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const data = await prisma.blogPost.findMany({
    where: {
      authorId: userId,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });

  return data;
}

export default async function DashboardRoute() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  const data = await getData(user.id);

  return (
    <div>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-medium">Your Blog Articles</h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create Post
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item: any) => (
          <BlogPostCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}
