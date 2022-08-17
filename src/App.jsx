import Navbar from "./components/Navbar";
import Blogpost from "./components/Blogpost";
import data from "../data";

function App() {

  const count = data.length;
  const blogposts = data.map(blogpost => {
    return (
      <Blogpost
        key={blogpost.id}
        {...blogpost}
        count={count}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <main className="blogpost-container">
        {blogposts}
      </main>
    </div>
  )
}

export default App
