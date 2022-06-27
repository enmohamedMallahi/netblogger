import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BlogsContext } from './context/BlogsContext';

const Home = () => {
  // const [articles, setArticles] = useState([]);
  const [articles, dispatch] = useContext(BlogsContext);

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
