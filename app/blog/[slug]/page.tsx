import { notFound } from "next/navigation";
import { posts } from "@/lib/posts";
import BlogPostContent from "./BlogPostContent";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const related = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return <BlogPostContent post={post} related={related} />;
}
