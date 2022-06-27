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
      <div className="articles">
        {articles.map((article) => (
          <div className="article">
            <img
              src="http://cdn.epicstream.com/assets/uploads/newscover/1596745837the_boys_deep.jpg"
              alt=""
            />
            <div>
              <h3>{article.title}</h3>
              <p>
                Quia et suscipit\nsuscipit recusandae consequuntur expedita et
                cum\nreprehenderit molestiae
              </p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Blogs;

// const d = (
//   <li key={article.id}>
//     {/* <Link to={`/blog/${article.id}`}>{article.title}</Link> */}
//     <div>
//       <img src="https://via.placeholder.com/300" alt="" />
//     </div>
//   </li>
// );
