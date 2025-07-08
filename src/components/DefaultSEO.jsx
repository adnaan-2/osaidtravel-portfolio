import { useEffect } from 'react';

const DefaultSEO = () => {
  useEffect(() => {
    // Default SEO values
    const title = 'Osaid Travel & Tours | Professional Travel Services in Pakistan';
    const description = 'Your trusted travel partner for Hajj, Umrah, Ziyarat, and international tours. Professional travel services in Pakistan.';
    const image = 'https://osaidtraveltours.com/logo.png';
    const url = 'https://osaidtraveltours.com';
    
    // Update document title
    document.title = title;
    
    // Find or create meta tags
    const metaTags = {
      description: findOrCreateMetaTag('description'),
      'og:title': findOrCreateMetaTag('og:title', true),
      'og:description': findOrCreateMetaTag('og:description', true),
      'og:image': findOrCreateMetaTag('og:image', true),
      'og:url': findOrCreateMetaTag('og:url', true),
      'og:type': findOrCreateMetaTag('og:type', true),
      'twitter:title': findOrCreateMetaTag('twitter:title'),
      'twitter:description': findOrCreateMetaTag('twitter:description'),
      'twitter:image': findOrCreateMetaTag('twitter:image')
    };
    
    // Update meta tag content
    metaTags.description.content = description;
    metaTags['og:title'].content = title;
    metaTags['og:description'].content = description;
    metaTags['og:image'].content = image;
    metaTags['og:url'].content = url;
    metaTags['og:type'].content = 'website';
    metaTags['twitter:title'].content = title;
    metaTags['twitter:description'].content = description;
    metaTags['twitter:image'].content = image;
    
    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
    
  }, []);
  
  // Helper function to find or create meta tags
  const findOrCreateMetaTag = (name, isProperty = false) => {
    let meta;
    if (isProperty) {
      meta = document.querySelector(`meta[property="${name}"]`);
    } else {
      meta = document.querySelector(`meta[name="${name}"]`);
    }
    
    if (!meta) {
      meta = document.createElement('meta');
      if (isProperty) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    
    return meta;
  };
  
  return null; // This component doesn't render anything
};

export default DefaultSEO;