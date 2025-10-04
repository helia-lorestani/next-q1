import SearchBar from "../../../components/SearchBar";
import Posts from "../../../components/Posts";

export default function PostsPage({ searchParams }) {
  const q = searchParams.q || "";

  return (
    <>
      <h1 style={{ marginLeft: "20px" }}>All Posts</h1>
      <SearchBar defaultValue={q} path="posts" />
      <Posts query={q} limit={10} />
    </>
  );
}
