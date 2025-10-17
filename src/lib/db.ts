 // lib/db.ts

    export const posts = [
      {id: 1, title: "db title 1"},
      {id: 2, title: "title 2"},
      {id: 3, title: "title 3"}
    ];

    export async function getPostFromDb() {
      // Simulate fetching users from a database

      return posts;
    }

    export async function getPostFromDbById(slug) {
      // Simulate fetching users from a database
console.log(slug)
      
  
      const post = posts.find(p => p.id === Number(slug)) ?? {title: `No post found with id ${slug}!`};
  
      return post;
    }