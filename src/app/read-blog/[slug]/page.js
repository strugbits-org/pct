import ReadBlog from "@/components/sections/ReadBlog";

export default function ReadBlogPage({ params: { slug } }) {
  console.log(slug);
  return <ReadBlog slug={slug} />;
}
