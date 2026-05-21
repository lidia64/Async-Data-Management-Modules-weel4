export function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to fetch posts: ${response.status}`);
      }

      return response.json();
    })
    .then((posts) => posts)
    .catch((error) => {
      console.error(error);
      return [];
    });
}
