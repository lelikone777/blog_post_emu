import { prisma } from "@/utils/db";

async function getData() {
  return prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageUrl: true,
      authorName: true,
      authorImage: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

export default async function Home() {
  const data = await getData();
  return (
    <div className="py-6">
      <h1 className="text-2xl font-semibold tracking-tight mb-8">
        Latest posts
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item: any) => (
          <div key={item.title} className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
