import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import '../styles/Blogs.css';

const blogPosts = [
  {
    id: 1,
    title: "Experience the Magic of Umrah",
    date: "April 15, 2024",
    image: "umrah1.jpg",
    excerpt: "Discover the spiritual journey and essential preparations for your blessed Umrah pilgrimage...",
    content: "Umrah is a sacred journey that holds immense spiritual significance in Islam. As you prepare for this blessed pilgrimage, it's essential to understand both the spiritual and practical aspects. The journey begins with the right intention (niyyah) and proper preparation. From selecting the right package to understanding the rituals, every step requires careful consideration. Our expert guides ensure you're well-prepared for this transformative experience. We'll help you navigate through the visa process, accommodation arrangements, and transportation details. Most importantly, we'll guide you through the essential rituals and practices, making your spiritual journey meaningful and rewarding. Remember, Umrah is not just a religious obligation; it's an opportunity for spiritual renewal and peace."
  },
  {
    id: 2,
    title: "Top 10 Tourist Destinations in Pakistan",
    date: "April 12, 2024",
    image: "domastic1.jpg",
    excerpt: "Explore the breathtaking landscapes and rich cultural heritage of Pakistan's must-visit locations...",
    content: "Pakistan is a land of diverse landscapes and rich cultural heritage. From the majestic peaks of the Himalayas to the serene beaches of the Arabian Sea, the country offers a plethora of tourist destinations. In this blog, we explore the top 10 must-visit locations in Pakistan. Discover the historical significance of Lahore, the natural beauty of Hunza Valley, and the architectural marvels of Mohenjo-Daro. Each destination has its unique charm and offers a glimpse into the vibrant culture and history of Pakistan. Whether you're an adventure seeker or a history enthusiast, Pakistan has something to offer for everyone."
  },
  {
    id: 3,
    title: "Planning Your Perfect Hajj Journey",
    date: "April 8, 2024",
    image: "hajj1.jpg",
    excerpt: "Essential tips and guidance for preparing for the sacred Hajj pilgrimage...",
    content: "Hajj is one of the five pillars of Islam and a once-in-a-lifetime journey for Muslims. Proper planning and preparation are crucial for a successful Hajj pilgrimage. In this blog, we provide essential tips and guidance to help you prepare for this sacred journey. Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto fuga officiis iusto aliquid veniam velit harum alias error est et tempore ea laboriosam placeat officia, quibusdam repellat accusamus dolores adipisci pariatur sint voluptate ipsum recusandae. Cupiditate voluptas dolorum omnis temporibus.From understanding the rituals to managing your health, every aspect of Hajj requires careful consideration. Our expert guides will assist you in navigating through the visa process, accommodation arrangements, and transportation details. We'll also provide valuable insights into the spiritual significance of Hajj and how to make the most of this transformative experience. Remember, Hajj is not just a religious obligation; it's an opportunity for spiritual growth and renewal."
  },
  {
    id: 4,
    title: "Budget Travel Tips for 2024",
    date: "April 5, 2024",
    image: "international1.jpg",
    excerpt: "Smart ways to explore the world without breaking the bank...",
    content: "Traveling on a budget doesn't mean compromising on experiences. With the right planning and strategies, you can explore the world without breaking the bank. In this blog, we share practical tips and tricks for budget travel in 2024. From finding affordable accommodations to saving on transportation, we'll help you make the most of your travel budget. Learn how to find the best deals on flights, use travel rewards, and plan your itinerary efficiently. Whether you're a solo traveler or planning a family vacation, our budget lorem30 travel tips will help you create memorable experiences without overspending."
  },
  {
    id: 5,
    title: "Hidden Gems of Northern Areas",
    date: "April 1, 2024",
    image: "ziarrat1.jpg",
    excerpt: "Discover the unexplored beauty of Pakistan's northern paradise...",
    content: "The northern areas of Pakistan are  re a paradise for nature lovers and adventure seekers. From the lush green valleys of experiences and unforgettable memories. However, safety should always be a top priority. In this blog, we provide essential safety tips for adventure seekers and thrill enthusiasts. From preparing for extreme sports to understanding the risks involved, we'll help you stay safe while enjoying your adventures. Learn about the importance of proper gear, physical fitness, and risk assessment. Whether you're hiking, rock climbing, or participating in water sports, our safety guidelines will ensure you have a safe and enjoyable experience. Remember, adventure tourism is about pushing your limits while staying safe  Swat to the snow-capped peaks of Gilgit-Baltistan, the region is home to some of the most breathtaking landscapes in the world. In this blog, we uncover the hidden gems of Pakistan's northern areas. Discover the serene beauty of Fairy Meadows, a paradise for nature lovers and adventure seekers. From the lush green valleys of Swat to the snow-capped peaks of Gilgit-Baltistan, the region is home to some of the most breathtaking landscapes in the world. In this blog, we uncover the hidden gems of Pakistan's northern areas. Discover the serene beauty of Fairy Meadows, the crystal-clear waters of Attabad Lake, and the majestic Rakaposhi mountain. Each destination offers a unique experience and a chance to connect with nature. Whether you're hiking through the mountains or exploring the local culture, the northern areas of Pakistan are a must-visit for any traveler."
  },
  {
    id: 6,
    title: "Business Travel Trends",
    date: "March 28, 2024",
    image: "b2b.jpg",
    excerpt: "Latest trends and innovations shaping the future of business travel...",
    content: "The business travel landscape is constantly  experiences and unforgettable memories. However, safety should always be a top priority. In this blog, we provide essential safety tips for adventure seekers and thrill enthusiasts. From preparing for extreme sports to understanding the risks involved, we'll help you stay safe while enjoying your adventures. Learn about the importance of proper gear, physical fitness, and risk assessment. Whether you're hiking, rock climbing, or participating in water sports, our safety guidelines will ensure you have a safe and enjoyable experience. Remember, adventure tourism is about pushing your limits while staying safe evolving, with new trends and innovations shaping the way professionals travel. In this blog, we explore the latest business travel trends for 2024. From the rise of remote work to the increasing focus on sustainability,re a paradise for nature lovers and adventure seekers. From the lush green valleys of Swat to the snow-capped peaks of Gilgit-Baltistan, the region is home to some of the most breathtaking landscapes in the world. In this blog, we uncover the hidden gems of Pakistan's northern areas. Discover the serene beauty of Fairy Meadows,  we'll discuss the key factors influencing business travel. Learn about the latest technologies and tools that are making business travel more efficient and convenient. Discover how companies are adapting to the changing travel landscape and what the future holds for business travelers. Whether you're a frequent flyer or an occasional business traveler, staying informed about the latest trends will help you navigate the world of business travel with ease."
  },
  {
    id: 7,
    title: "Family Holiday Planning Guide",
    date: "March 25, 2024",
    image: "family-travel.jpg",
    excerpt: "Tips for planning the perfect family vacation with children...",
    content: "Planning a family vacation can be both exciting and challenging. In this blog, we provide a comprehensive guide to help you plan the perfect family holiday. From choosing the right destination to packing essentials, we'll cover all aspects of family travel. Learn how to find family-friendly accommodations, plan activities that cater to all age groups, and manage travel logistics with children. Our expert tips will help you create a memorable and stress-free vacation for the whole family. Whether you're traveling with toddlers or teenagers, our family holiday planning guide will ensure a smooth and enjoyable trip."
  },
  {
    id: 8,
    title: "Adventure Tourism Safety Tips",
    date: "March 22, 2024",
    image: "adventure-safety.jpg",
    excerpt: "Essential safety guidelines for adventure seekers and thrill enthusiasts...",
    content: "Adventure tourism offers thrilling experiences and unforgettable memories. However, safety should always be a top priority. In this blog, we provide essential safety tips for adventure seekers and thrill enthusiasts. From preparing for extreme sports to understanding the risks involved, we'll help you stay safe while enjoying your adventures. Learn about the importance of proper gear, physical fitness, and risk assessment. Whether you're hiking, rock climbing, or participating in water sports, our safety guidelines will ensure you have a safe and enjoyable experience. Remember, adventure tourism is about pushing your limits while staying safe and responsible."
  },
  {
    id: 9,
    title: "Cultural Tourism Experiences",
    date: "March 19, 2024",
    image: "cultural-tourism.jpg",
    excerpt: "Immerse yourself in diverse cultures through meaningful travel experiences...",
    content: "Cultural tourism allows travelers to immerse themselves in the rich heritage and traditions of different communities. In this blog, we explore the unique cultural experiences that await you around the world. From participating in local festivals to exploring historical landmarks, cultural tourism offers a deeper understanding of the places you visit. Learn about the customs, traditions, and lifestyles of different cultures and how to engage with them respectfully. Whether you're visiting a remote village or a bustling city,  experiences and unforgettable memories. However, safety should always be a top priority. In this blog, we provide essential safety tips for adventure seekers and thrill enthusiasts. From preparing for extreme sports to understanding the risks involved, we'll help you stay safe while enjoying your adventures. Learn about the importance of proper gear, physical fitness, and risk assessment. Whether you're hiking, rock climbing, or participating in water sports, our safety guidelines will ensure you have a safe and enjoyable experience. Remember, adventure tourism is about pushing your limits while staying safe cultural tourism provides meaningful and enriching travel experiences. Discover how to connect with local communities and create lasting memories through cultural exploration."
  }
];

export default function Blogs() {
  const [expandedPosts, setExpandedPosts] = useState({});

  const toggleReadMore = (id) => {
    setExpandedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const truncateText = (text, maxLength = 150) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const handleShare = async (post) => {
    try {
      if (navigator.share) {
        // For mobile devices
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href
        });
      } else {
        // Fallback for desktop - copy URL to clipboard
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <h1>OUR LATEST <span className="highlight"> BLOGS</span></h1>
        <p>Latest travel insights and updates from our experts</p>
      </div>

      <div className="blogs-grid">
        {blogPosts.map(post => (
          <div key={post.id} className="blog-card">
            <div className="blog-image">
              <img src={post.image} alt={post.title} />
              <button 
                className="share-button"
                onClick={() => handleShare(post)}
                aria-label="Share this blog"
              >
                <Share2 size={20} />
              </button>
            </div>
            <div className="blog-content">
              <div className="blog-date">{post.date}</div>
              <h3>{post.title}</h3>
              <p className="blog-text">
                {expandedPosts[post.id] ? post.content : truncateText(post.content)}
              </p>
              <button 
                className="read-more"
                onClick={() => toggleReadMore(post.id)}
              >
                {expandedPosts[post.id] ? 'Read Less' : 'Read More'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
