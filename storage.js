export default async function saveToLocal(data) {
  try {
    const posts = JSON.stringify(data);
    localStorage.setItem("userPosts", posts);
  } catch (err) {
    console.error(err);
  }
}
