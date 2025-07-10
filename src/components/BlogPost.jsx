import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/BlogPost.css';
import { blogPosts } from '../data/blogData';
import { Helmet } from 'react-helmet-async';

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    const currentPost = blogPosts.find(post => post.id === id);
    setPost(currentPost);
    window.scrollTo(0, 0);
  }, [id]);
  
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
  
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };
  
  // For meta description, use excerpt or first part of content
  const getMetaDescription = () => {
    if (post.excerpt) return post.excerpt;
    
    // If content is HTML, strip tags
    if (post.content.startsWith('<')) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = post.content.substring(0, 300);
      return tempDiv.textContent.substring(0, 160) + '...';
    }
    
    // Plain text
    return post.content.substring(0, 160) + '...';
  };
  
  // Create image URL with domain
  const getImageUrl = () => {
    const domain = 'https://osaidtraveltours.com';
    return `${domain}/${post.image}`;
  };
  
  // Create canonical URL
  const getCanonicalUrl = () => {
    return `https://osaidtraveltours.com/blogs/${id}`;
  };
  
  return (
    <>
      <Helmet>
        <title>{`${post.title} | Osaid Travel & Tours`}</title>
        <meta name="description" content={getMetaDescription()} />
        <link rel="canonical" href={getCanonicalUrl()} />
        {/* Open Graph tags */}
        <meta property="og:title" content={`${post.title} | Osaid Travel & Tours`} />
        <meta property="og:description" content={getMetaDescription()} />
        <meta property="og:image" content={getImageUrl()} />
        <meta property="og:url" content={getCanonicalUrl()} />
        <meta property="og:type" content="article" />
        {/* Twitter tags */}
        <meta name="twitter:title" content={`${post.title} | Osaid Travel & Tours`} />
        <meta name="twitter:description" content={getMetaDescription()} />
        <meta name="twitter:image" content={getImageUrl()} />
      </Helmet>
      
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
            {post.content.startsWith('<') ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              post.content.split('\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;