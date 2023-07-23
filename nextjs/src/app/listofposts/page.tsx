const getPostsData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  return res.json();
}

const getUsersData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


export default async function ListOfPosts () {

  // get posts data
  // const posts = await getPostsData();

  // but if we want to fetch more than one api we can do this
  const [posts, users] = await Promise.all([getPostsData(), getUsersData()]); 
  
  return (
    <div>

      {posts.map((post: any) => {
        return <p className="text-green-300">{post.title}</p>
      })}
      
      {users.map((user: any) => {
        return <p className="text-red-300">{user.name}</p>
      })}
      
      
    </div>
  )
}