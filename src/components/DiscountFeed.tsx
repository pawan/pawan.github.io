// components/DiscountFeed.tsx
export async function PostFeed() {
  const res = await fetch('http://magento247.local/discounts-api.json');
  const posts = await res.json();
  console.log(posts);
  // ... render posts
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.sku}> Sku = {post.sku} with {post.name} has {post.discount} discount</li>
      ))}
    </ul>
  );
}