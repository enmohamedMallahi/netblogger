import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogsContext } from '../context/BlogsContext';

const Blogs = () => {
  const [articles, dispatch] = useContext(BlogsContext);

  return (
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/blog/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <Link to="/new-blog" className="add-btn">
        <i class="fa-solid fa-plus"></i>
      </Link>
    </>
  );
};

export default Blogs;
