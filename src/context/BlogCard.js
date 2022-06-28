import React from 'react';

const BlogCard = () => {
  return (
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
  );
};

export default BlogCard;
