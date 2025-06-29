import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Copy, ArrowLeft } from 'lucide-react';
import '../styles/BlogPost.css';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    // Find the blog post by ID
    const currentPost = blogPosts.find(post => post.id === parseInt(id));
    setPost(currentPost);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
    
    // Set page title
    if (currentPost) {
      document.title = `${currentPost.title} | Osaid Travels`;
    }
  }, [id]);
  
  // If post not found
  if (!post) {
    return (
      <div className="blog-not-found">
        <h2>Blog post not found</h2>
        <Link to="/blogs" className="back-to-blogs">
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
      </div>
    );
  }
  
  // Format date nicely
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // Handle share copy link
  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  // Format content with line breaks
  const formatContent = (content) => {
    return content.split('\n').map((paragraph, i) => (
      <p key={i} className="blog-paragraph">{paragraph}</p>
    ));
  };

  return (
    <div className="blog-post-container">
      <div className="blog-post-header">
        <Link to="/blogs" className="back-to-blogs">
          <ArrowLeft size={18} />
          Back to Blogs
        </Link>
        <div className="blog-post-meta">
          <span className="blog-post-date">{formatDate(post.date)}</span>
        </div>
      </div>
      
      <h1 className="blog-post-title">{post.title}</h1>
      
      {/* Using exact same image syntax that works in Blogs.jsx */}
      <div className="blog-post-featured-image">
        {/* Try a direct approach with the known working image filename */}
        <img 
          src={`/${post.image.split('/').pop()}`}
          alt={post.title}
        />
      </div>
      
      <div className="blog-post-content-wrapper">
        <div className="blog-post-share">
          <h4>Share</h4>
          <div className="share-icons">
            <a 
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
              aria-label="Share on Facebook"
            >
              <Facebook size={20} />
            </a>
            
            <a 
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="twitter"
              aria-label="Share on Twitter"
            >
              <Twitter size={20} />
            </a>
            
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="linkedin"
              aria-label="Share on LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            
            <a 
              href={`https://www.instagram.com/`}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram"
              aria-label="Share on Instagram"
            >
              <Instagram size={20} />
            </a>
            
            <button 
              onClick={handleCopyLink} 
              className={`copy-link ${copied ? 'copied' : ''}`}
              aria-label="Copy link"
            >
              <Copy size={20} />
              <span className="copy-tooltip">{copied ? 'Copied!' : 'Copy link'}</span>
            </button>
          </div>
        </div>
        
        <div className="blog-post-content">
          {formatContent(post.content)}
          
          <div className="blog-post-tags">
            <span className="tag">Travel</span>
            <span className="tag">{post.title.includes('Pakistan') ? 'Pakistan' : 'International'}</span>
            {post.title.includes('Umrah') || post.title.includes('Hajj') ? (
              <span className="tag">Religious</span>
            ) : null}
          </div>
          
          <div className="blog-post-author">
            <div className="author-image">
              <img src="/images/logo.png" alt="Osaid Travels" />
            </div>
            <div className="author-info">
              <h4>Osaid Travels</h4>
              <p>Travel experts helping you discover the world's most beautiful destinations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;