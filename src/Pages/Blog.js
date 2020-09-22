// pages/Blog.js
import React, { useState, useEffect } from "react";
import fire from "../Config/fire-config";
import CreatePost from "../Components/CreatePost";
import BlogPost from "../Components/BlogPost";
import { Link, Redirect } from "react-router-dom";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [notification, setNotification] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  fire.auth().onAuthStateChanged((user) => {
    if (user) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  });
  useEffect(() => {
    fire
      .firestore()
      .collection("blog")
      .onSnapshot((snap) => {
        const blogs = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);
  const handleLogout = () => {
    fire
      .auth()
      .signOut()
      .then(() => {
        setNotification("Logged out");
        setTimeout(() => {
          setNotification("");
        }, 2000);
      });
  };

  if (loggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div>
        <title>Blog App</title>
      </div>
      <h1>Blog</h1>
      <BlogPost />
      {notification}
      {!loggedIn ? (
        <div>
          {/* <Link href="/users/register">
            <a>Register</a>
          </Link>{" "} */}
          |
          <Link to={"/login"}>
            <a> Login</a>
          </Link>
        </div>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}{" "}
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <a itemProp="hello">{blog.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      {loggedIn && <CreatePost />}
    </div>
  );
};
export default Home;
