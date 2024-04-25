import ReadBlog from "@/components/sections/ReadBlog";

export default function ReadBlogPage({ params: { slug } }) {
  return <ReadBlog slug={slug} />;
}
