import { useEffect } from 'react';

const SEO = ({ title, description, image, url, type = 'website' }) => {
  useEffect(() => {
    // Update the document title
    document.title = title;
    
    // Find or create meta tags
    const metaTags = {
      description: document.querySelector('meta[name="description"]') || createMetaTag('description'),
      'og:title': document.querySelector('meta[property="og:title"]') || createMetaTag('og:title', true),
      'og:description': document.querySelector('meta[property="og:description"]') || createMetaTag('og:description', true),
      'og:image': document.querySelector('meta[property="og:image"]') || createMetaTag('og:image', true),
      'og:url': document.querySelector('meta[property="og:url"]') || createMetaTag('og:url', true),
      'og:type': document.querySelector('meta[property="og:type"]') || createMetaTag('og:type', true),
      'twitter:title': document.querySelector('meta[name="twitter:title"]') || createMetaTag('twitter:title'),
      'twitter:description': document.querySelector('meta[name="twitter:description"]') || createMetaTag('twitter:description'),
      'twitter:image': document.querySelector('meta[name="twitter:image"]') || createMetaTag('twitter:image')
    };
    
    // Update meta tag content
    metaTags.description.content = description;
    metaTags['og:title'].content = title;
    metaTags['og:description'].content = description;
    metaTags['og:image'].content = image;
    metaTags['og:url'].content = url;
    metaTags['og:type'].content = type;
    metaTags['twitter:title'].content = title;
    metaTags['twitter:description'].content = description;
    metaTags['twitter:image'].content = image;
    
    // Find or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
    
    // Cleanup function
    return () => {
      // No cleanup needed as we're just updating existing tags
    };
  }, [title, description, image, url, type]);
  
  // Helper function to create meta tags
  function createMetaTag(name, isProperty = false) {
    const meta = document.createElement('meta');
    if (isProperty) {
      meta.setAttribute('property', name);
    } else {
      meta.setAttribute('name', name);
    }
    document.head.appendChild(meta);
    return meta;
  }
  
  // This component doesn't render anything
  return null;
};

export default SEO;