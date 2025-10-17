// components/DiscountFeed.tsx
export async function PostFeed() {
  //const res = await fetch('http://magento247.local/discounts-api.json');
  const posts = [
    {
        "sku":"MSH09",
        "name": "Troy Yoga Short",
        "discount": 12
    },
    {
        "sku":"MSH08",
        "name": "Jillian Top",
        "discount": 15
    },
    {
        "sku":"MSH07",
        "name": "Anna Draped Top",
        "discount": 25
    },
    {
        "sku":"MSH06",
        "name": "Emilia Cropped Lace Top",
        "discount": 50
    },
    {
        "sku":"MSH05",
        "name": "Veronica Maxi Dress",
        "discount": 10
    },
    {
        "sku": "24-MB01",
        "name": "Joust Duffle Bag",
        "discount": 5
    },
    {
        "sku": "24-WB01",
        "name": "Voyage Yoga Bag",
        "discount": 10
    },
    {
        "sku": "24-MB05",
        "name": "Wayfarer Messenger Bag",
        "discount": 7
    },
    {
        "sku": "24-WB04",
        "name": "Push It Messenger Bag",
        "discount": 12
    },
    {
        "sku": "24-UG03",
        "name": "Harmony Lumaflex&trade; Strength Band Kit ",
        "discount": 10
    },
    {
        "sku": "24-UG06",
        "name": "Affirm Water Bottle ",
        "discount": 20
    }
]
  //const posts = await res.json();
  //console.log(posts);
  // ... render posts
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.sku}> Sku = {post.sku} with {post.name} has {post.discount} discount</li>
      ))}
    </ul>
  );
}