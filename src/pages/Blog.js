import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Blog = () => {
  const [article, setArticle] = useState({
    id: '',
    title: '',
    body: '',
  });
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setArticle(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <article>
        <h1>{article.title}</h1>
        <h2>Second heading title</h2>
        <p>{article.body}</p>
        <p>{article.body}</p>
      </article>
    </>
  );
};

export default Blog;
