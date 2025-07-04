import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/BlogPost.css';
import { blogPosts } from '../data/blogData';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    // Modified to handle both string and numeric IDs
    const currentPost = blogPosts.find(post => {
      // Convert both to strings for comparison if needed
      return post.id.toString() === id.toString();
    });
    
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
  
  // Determine if content is HTML or plain text
  const isHtmlContent = (content) => {
    return content.trim().startsWith('<');
  };
  
  // Format content appropriately
  const renderContent = (content) => {
    if (isHtmlContent(content)) {
      // Content has HTML - use dangerouslySetInnerHTML
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    } else {
      // Content is plain text - split by newlines
      return content.split('\n').map((paragraph, i) => (
        <p key={i} className="blog-paragraph">{paragraph}</p>
      ));
    }
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
      
      <div className="blog-post-featured-image">
        <img 
          src={`/${post.image.split('/').pop()}`}
          alt={post.title}
        />
      </div>
      
      <div className="blog-post-content-wrapper">
        <div className="blog-post-content">
          {renderContent(post.content)}
          
          <div className="blog-post-tags">
            <span className="tag">Travel</span>
            <span className="tag">{post.title.includes('Pakistan') ? 'Pakistan' : 'International'}</span>
            {post.title.includes('Umrah') || post.title.includes('Hajj') ? (
              <span className="tag">Religious</span>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;