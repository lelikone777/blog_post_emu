import { prisma } from '@/utils/db';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });
  return data;
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getData(id);

  if (!data) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <Link className={buttonVariants({ variant: 'secondary' })} href="/">
        Back to posts
      </Link>

      <div className="mt-6 mb-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image src={data.authorImage} alt={data.authorName} fill className="object-cover" />
            </div>
            <p className="font-medium">{data.authorName}</p>
          </div>
          <p className="text-sm text-gray-500">
            {new Intl.DateTimeFormat('ru-RU', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: 'numeric',
              minute: 'numeric',
            }).format(data.createdAt)}
          </p>
        </div>
      </div>

      <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
        <Image src={data.imageUrl} alt={data.title} fill className="object-cover" priority />
      </div>

      <Card>
        <CardContent>
          <p className="text-gray-700">{data.content}</p>
        </CardContent>
      </Card>
    </div>
  );
}
