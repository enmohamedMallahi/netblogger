import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { BlogsContext } from '../context/BlogsContext';

const BlogPage = () => {
  const [articles, dispatch] = useContext(BlogsContext);
  const { id } = useParams();

  let article = articles.filter((article) => article.id == id)[0];
  console.log(article);

  return (
    <>
      <article>
        {article && (
          <>
            <h1>{article.title}</h1>
            <h2>Second heading title</h2>
            <p>{article.body}</p>
            <p>{article.body}</p>
          </>
        )}
      </article>
    </>
  );
};

export default BlogPage;
