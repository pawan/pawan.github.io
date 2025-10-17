import { getPostFromDbById } from '@/lib/db';

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const post = await getPostFromDbById(slug)

  //const post = posts.find(p => p.id === Number(slug)) ?? {name: "No post found!"};

  console.log(slug);
  console.log(post);
  //console.log(posts);
 
  return (
    <div>
    <Heading />
      <p>{slug}</p>
      <h1>{post.title}</h1>
      
    </div>
  )
}

function Heading() {
  return <h2>Post Heading from funcation!</h2>;
}