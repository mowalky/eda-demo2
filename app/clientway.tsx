"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState<[]>([]);
  const [loading, setLoading] = useState(true);

  const loadPosts = async () => {
    const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
    const postData = await getPosts.json();
    setPosts(postData);
    setLoading(false);
  };

  useEffect(() => {
    loadPosts();
    return () => setPosts([]);
  }, []);

  if (loading) return <div>loading posts..</div>;

  return (
    <div>
      <button className="btn">Load Data 2</button>
      <hr />
      Posts:
      {posts.length &&
        posts.map(({ title, body }: { title: string; body: string }) => (
          <div>
            d{title}
            <p>{body}</p>
          </div>
        ))}
    </div>
  );
}
