import { getData } from "../utils/dataservices";
import Card from "./Card";

export default async function PostsList({ query, limit }) {
  const data = await getData(`https://dummyjson.com/posts?limit=${limit}`);
  let posts = data.posts;

  if (query) {
    const q = query.toLowerCase();
    posts = posts.filter((p) => p.title.toLowerCase().includes(q));
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        justifyContent: "center",
      }}
    >
      {posts.length === 0 ? (
        <p>No posts found</p>
      ) : (
        posts.map((p) => <Card key={p.id} item={p} type="posts" />)
      )}
    </div>
  );
}
