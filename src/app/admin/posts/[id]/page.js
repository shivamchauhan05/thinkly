import PostEditor from "@/components/PostEditor";

export default async function EditPostPage({ params }) {
  const { id } = await params;
  return <PostEditor postId={id} />;
}
