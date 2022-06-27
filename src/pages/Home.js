import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="banner">
        <h1>Hello To NetBlogger!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/blog/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
