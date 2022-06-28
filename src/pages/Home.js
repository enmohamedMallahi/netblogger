import React, { useContext } from 'react';
import { BlogsContext } from '../context/BlogsContext';
import BlogCards from '../components/BlogCard';

const Home = () => {
  // const [articles, setArticles] = useState([]);
  const [articles, dispatch] = useContext(BlogsContext);

  return (
    <>
      <div className="banner">
        <h1>Welcome To NetBlogger!</h1>
        <p>Start editing to see some magic happen :)</p>
      </div>
      <div className="articles">
        {articles.map((article) => (
          <BlogCards article={article} />
        ))}
      </div>
    </>
  );
};

export default Home;
// const f = (<li key={article.id}>
//   <Link to={`/blog/${article.id}`}>{article.title}</Link>
// </li>)
