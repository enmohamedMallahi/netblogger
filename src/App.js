import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Context
import { BlogsProvider } from './context/BlogsContext';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import Blog from './pages/Blog';
import NewBlog from './pages/NewBlog';

// Components
import Navbar from './components/Navbar';

// Stylings
import './style.css';

export default function App() {
  return (
    <BlogsProvider>
      <Router>
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/new-blog" element={<NewBlog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </main>
      </Router>
    </BlogsProvider>
  );
}
