import { Card, CardDescription, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { handleSubmission } from '@/app/actions';

export default function CreateBlogRoute() {
  return (
    <div>
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Post something new</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4" action={handleSubmission}>
            <div className="flex flex-col gap-2">
              <label htmlFor="title">Title</label>
              <Input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                className="w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Content">Content</label>
              <Textarea
                name="content"
                id="content"
                placeholder="Content"
                className="w-full"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="imageUrl">Image URL</label>
              <Input
                placeholder="Image URL"
                name="imageUrl"
                id="imageUrl"
                className="w-full"
                type="imageUrl"
              />
            </div>
            <Button type="submit">Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
