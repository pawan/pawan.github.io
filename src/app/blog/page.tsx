import { getPostFromDb } from '@/lib/db';

export default async function Page() {

  

  const posts = await getPostFromDb()
 
  return (
    <div>
      {posts.map((post) => (
        <a key={post.id} href={`/blog/${post.slug}`}> {post.title} </a>
      ))}
      </div>
  )
}