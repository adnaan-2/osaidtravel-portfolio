import React, { useState } from 'react';
import { Share2 } from 'lucide-react';
import '../styles/Blogs.css';

const blogPosts = [
  {
    id: 1,
    title: "Explore Northern Pakistan: Top 5 Must-Visit Destinations for 2025",
    date: "May 8, 2024",
    image: "domastic1.jpg",
    excerpt: "Discover the top northern destinations in Pakistan for 2025. Explore Hunza, Skardu, Naran, and more...",
    content: "Pakistan's north is a haven for nature lovers, adventurers, and those seeking serenity. Osaid Travels brings you the best domestic tour packages to the north in 2025.  Here are the top destinations to explore:\n\n1. Hunza Valley\nKnown for its majestic mountains and friendly locals, Hunza is a must-visit. Our Hunza tour package includes Attabad Lake, Baltit Fort, and Passu Cones.\n\n2. Skardu\nSkardu offers breathtaking views of the Karakoram Range. Explore Shangrila Resort, Satpara Lake, and Deosai Plains with our exclusive Skardu travel plan.\n\n3. Fairy Meadows\nPerfect for trekkers, this destination offers unmatched views of Nanga Parbat.\n\n4. Swat Valley\nNicknamed the \"Switzerland of Pakistan\", our Swat tour includes Malam Jabba and Kalam.\n\n5. Naran & Kaghan\nLake Saif-ul-Malook, Babusar Top, and Lulusar Lake await you on this scenic adventure."
  },
  {
    id: 2,
    title: "Top International Travel Destinations for Pakistanis in 2025",
    date: "May 5, 2024",
    image: "international1.jpg",
    excerpt: "Plan your next international holiday with Osaid Travels. Explore trending destinations like Turkey, UAE, Malaysia, and more...",
    content: "Looking to travel abroad in 2025? Osaid Travels brings you international tour packages that combine comfort, affordability, and adventure.\n\n1. Turkey\nFrom Istanbul's historic mosques to Cappadocia's hot air balloons, our Turkey tour is a cultural dream.\n\n2. United Arab Emirates (UAE)\nVisit Dubai, Abu Dhabi, and Sharjah in luxury. Desert safaris, Burj Khalifa, and shopping festivals await!\n\n3. Malaysia\nEnjoy Langkawi beaches, Kuala Lumpur's skyline, and lush green forests.\n\n4. Thailand\nExperience vibrant Bangkok, Phuket's beaches, and spiritual Chiang Mai.\n\n5. Saudi Arabia (Tourism)\nBesides Umrah, Saudi offers tourism experiences—AlUla, Red Sea Coastline, and Riyadh's modernity."
  },
  {
    id: 3,
    title: "Hajj and Umrah Guide 2025: Everything You Need to Know",
    date: "May 1, 2024",
    image: "umrah1.jpg",
    excerpt: "Planning Hajj or Umrah in 2025? Get complete travel services, visa support, and expert guidance with Osaid Travels...",
    content: "Hajj and Umrah are spiritual journeys every Muslim dreams of. At Osaid Travels, we ensure a smooth, hassle-free pilgrimage experience with complete support.\n\nUmrah Packages\nWe offer 7, 10, and 14-day packages for Umrah from Pakistan with hotel, transport, and visa assistance included.\n\nHajj Packages 2025\nOur premium and economy Hajj options offer full-board services with guides, religious training, and group coordination.\n\nWhy Choose Us?\n• Licensed and trusted Hajj operator\n• Customizable travel plans\n• Group and family packages available\n\nImportant Note: Book early for 2025 to ensure preferred dates and hotels in Makkah and Madinah."
  },
  {
    id: 4,
    title: "Top 10 Travel Trends in 2025 for Pakistani Tourists",
    date: "April 28, 2024",
    image: "b2b.jpg",
    excerpt: "From eco-tourism to digital nomad travel, discover the latest travel trends for Pakistani tourists in 2025...",
    content: "Travel in 2025 is all about personalization, sustainability, and experience. Here are the top travel trends Osaid Travels is following to give you an unforgettable trip:\n\n1. Eco-Friendly Tours\nNorthern Pakistan eco-resorts and green transport are in demand.\n\n2. Visa-Free Destinations\nExplore countries like Maldives, Sri Lanka, and Kenya that offer visa-on-arrival or e-visa for Pakistanis.\n\n3. Digital Nomad Packages\nWork remotely while traveling—our international tours include coworking-friendly hotels and fast Wi-Fi.\n\n4. Luxury + Budget Hybrid Tours\nGet luxury experiences on a budget with our smart package combinations.\n\n5. Family-Focused Itineraries\nTours that keep kids and parents equally entertained."
  },
  {
    id: 5,
    title: "Experience the Magic of Umrah: A Complete Guide for First-Time Pilgrims",
    date: "April 25, 2024",
    image: "hajj1.jpg",
    excerpt: "Discover the spiritual journey and essential preparations for your blessed Umrah pilgrimage...",
    content: "Umrah is a sacred journey that holds immense spiritual significance in Islam. As you prepare for this blessed pilgrimage, it's essential to understand both the spiritual and practical aspects. The journey begins with the right intention (niyyah) and proper preparation. From selecting the right package to understanding the rituals, every step requires careful consideration. Our expert guides ensure you're well-prepared for this transformative experience. We'll help you navigate through the visa process, accommodation arrangements, and transportation details. Most importantly, we'll guide you through the essential rituals and practices, making your spiritual journey meaningful and rewarding. Remember, Umrah is not just a religious obligation; it's an opportunity for spiritual renewal and peace."
  },
  {
    id: 6,
    title: "Hidden Gems of Northern Pakistan: Beyond the Tourist Trail",
    date: "April 22, 2024",
    image: "ziarrat1.jpg",
    excerpt: "Discover the unexplored beauty of Pakistan's northern paradise beyond popular destinations...",
    content: "The northern areas of Pakistan are a paradise for nature lovers and adventure seekers. While many tourists visit popular spots, we invite you to explore the hidden gems with Osaid Travels. Discover the serene beauty of Fairy Meadows, the crystal-clear waters of Attabad Lake, and the majestic Rakaposhi mountain. Each destination offers a unique experience and a chance to connect with nature. Whether you're hiking through the mountains or exploring the local culture, the northern areas of Pakistan are a must-visit for any traveler. Our expert guides will take you to locations that few tourists ever see, giving you an authentic experience of the true beauty of Northern Pakistan."
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
