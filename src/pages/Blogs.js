import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setArticles(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
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

export default Blogs;
