import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/BlogPost.css';
import { blogPosts } from '../data/blogData';
import SEO from './SEO';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    // Find post by ID (handle both string and numeric IDs)
    const currentPost = blogPosts.find(post => {
      if (typeof post.id === 'number' && typeof id === 'string') {
        return post.id.toString() === id;
      }
      return post.id === id;
    });
    
    setPost(currentPost);
    
    // Scroll to top when post changes
    window.scrollTo(0, 0);
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
  
  // Get a clean excerpt for meta description
  const getMetaDescription = (content) => {
    // If content is HTML, strip tags
    if (content.trim().startsWith('<')) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = content;
      return tempDiv.textContent.substring(0, 157) + '...';
    } 
    // Otherwise use plain text directly
    return content.substring(0, 157) + '...';
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

  // Create canonical URL
  const canonicalUrl = `https://osaidtraveltours.com/blogs/${id}`;
  const imageUrl = `https://osaidtraveltours.com/${post.image}`;

  return (
    <>
      {/* Add SEO component */}
      <SEO
        title={`${post.title} | Osaid Travel`}
        description={post.excerpt || getMetaDescription(post.content)}
        image={imageUrl}
        url={canonicalUrl}
        type="article"
      />

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
            src={`/${post.image}`}
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
    </>
  );
};

export default BlogPost;