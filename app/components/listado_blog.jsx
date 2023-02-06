
import Post from "~/components/post";
function ListadoBlog({posts}) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      {posts.length && (
        <div className="post-grid">
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      )}
    </>
  );
}

export default ListadoBlog;
