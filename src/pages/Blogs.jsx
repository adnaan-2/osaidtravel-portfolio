import React from 'react';
import { Link } from 'react-router-dom';
import { Share2, Clock } from 'lucide-react';
import '../styles/Blogs.css';
import { blogPosts } from '../data/blogData';

export default function Blogs() {
  const handleShare = async (post) => {
    try {
      if (navigator.share) {
        // For mobile devices
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: `${window.location.origin}/blogs/${post.id}`
        });
      } else {
        // Fallback for desktop - copy URL to clipboard
        await navigator.clipboard.writeText(`${window.location.origin}/blogs/${post.id}`);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  // Format date nicely
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>OUR LATEST <span className="highlight">BLOGS</span></h1>
        <p>Latest travel insights and updates from our experts</p>
      </div>

      <div className="blogs-grid">
        {blogPosts.map((blog) => (
          <Link to={`/blogs/${blog.id}`} key={blog.id} className="blog-card">
            <div className="blog-card">
              <div className="blog-image">
                <img src={`${blog.image}`} alt={blog.title} />
                <button 
                  className="share-button"
                  onClick={(e) => {
                    e.preventDefault(); // Prevent navigation when clicking share
                    handleShare(blog);
                  }}
                  aria-label="Share this blog"
                >
                  <Share2 size={20} />
                </button>
              </div>
              <div className="blog-content">
                <div className="blog-date">
                  <Clock size={16} />
                  {formatDate(blog.date)}
                </div>
                <h3>{blog.title}</h3>
                <p className="blog-text">{truncateText(blog.excerpt, 120)}</p>
                <span className="read-more">
                  Read More
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
