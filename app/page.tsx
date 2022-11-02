const getPosts = async () => {
  const getPosts = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const postData = await getPosts.json();
  return postData;
};

export default async function Home() {
  const posts = await getPosts();

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
