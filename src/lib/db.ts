 // lib/db.ts

    export const posts = [
      {id: 1, slug: 'first-post',title: "db title 1"},
      {id: 2, slug: 'second-post', title: "title 2"},
      {id: 3, slug: 'third-post', title: "title 3"}
    ];

    export async function getPostFromDb() {
      // Simulate fetching users from a database

      return posts;
    }

    export async function getPostFromDbById(slug) {
      // Simulate fetching users from a database
console.log(slug)


      const post = posts.find(p => p.slug === slug) ?? {title: `No post found with id ${slug}!`};

      return post;
    }