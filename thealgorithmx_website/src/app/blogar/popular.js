// components/TabsContent.jsx
'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TabsContent = () => {
  // Categories/tabs
  const categories = ['Accessibility', 'Android Dev', 'Blockchain', 'Gadgets'];
  
  // Content items organized by category
  const contentByCategory = {
    'Accessibility': [
      {
        id: '01',
        category: 'CASE STUDY',
        title: 'How a developer and designer duo at Deutsche Bank keep remote collaboration alive',
        author: 'Jone Doe',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/case-study/remote-collaboration',
        image: '/images/trend-post-02.jpg',
      },
      {
        id: '02',
        category: 'BOOKS',
        title: 'The underrated design book that transformed the way I work',
        author: 'Jane Afroj',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/books/underrated-design-book',
        image: '/images/trend-post-04.jpg',
      },
      {
        id: '03',
        category: 'PROCESS',
        title: "Here's what you should (and shouldn't) do when giving formal feedback",
        author: 'Israt Ara',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/process/formal-feedback',
        image: '/images/trend-post-02.jpg',
      },
      {
        id: '04',
        category: 'CASE STUDY',
        title: '6 ways you can make your design more inclusive',
        author: 'Michael Chen',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/case-study/inclusive-design',
        image: '/images/trend-post-04.jpg',
      },
    ],
    'Android Dev': [
      {
        id: '01',
        category: 'DEVELOPMENT',
        title: 'Building responsive Android apps with Jetpack Compose',
        author: 'Alex Lee',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/development/jetpack-compose',
        image: '/images/android-image1.jpg',
      },
      {
        id: '02',
        category: 'TUTORIAL',
        title: 'Implementing Material Design 3 in your Android application',
        author: 'Sarah Wilson',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/tutorial/material-design',
        image: '/images/android-image2.jpg',
      },
      {
        id: '03',
        category: 'PERFORMANCE',
        title: 'Optimizing battery life in Android applications',
        author: 'David Johnson',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/performance/battery-optimization',
        image: '/images/android-image3.jpg',
      },
      {
        id: '04',
        category: 'DEVELOPMENT',
        title: 'Creating secure Android applications with Kotlin',
        author: 'Emma Brown',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/development/kotlin-security',
        image: '/images/android-image4.jpg',
      },
    ],
    'Blockchain': [
      {
        id: '01',
        category: 'TECHNOLOGY',
        title: 'Understanding smart contracts and their real-world applications',
        author: 'Ryan Smith',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/technology/smart-contracts',
        image: '/images/blockchain-image1.jpg',
      },
      {
        id: '02',
        category: 'FINANCE',
        title: 'How DeFi is changing traditional banking systems',
        author: 'Jessica Lin',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/finance/defi-banking',
        image: '/images/blockchain-image2.jpg',
      },
      {
        id: '03',
        category: 'DEVELOPMENT',
        title: 'Building your first dApp on Ethereum',
        author: 'Chris Taylor',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/development/ethereum-dapp',
        image: '/images/blockchain-image3.jpg',
      },
      {
        id: '04',
        category: 'SECURITY',
        title: 'Best practices for blockchain security in 2019',
        author: 'Mia Zhang',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/security/blockchain-practices',
        image: '/images/blockchain-image4.jpg',
      },
    ],
    'Gadgets': [
      {
        id: '01',
        category: 'REVIEW',
        title: 'The latest smartphone trends changing how we interact',
        author: 'Thomas Green',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/review/smartphone-trends',
        image: '/images/person-with-phone.jpg',
      },
      {
        id: '02',
        category: 'NEWS',
        title: "Wearable tech that's actually worth your money in 2019",
        author: 'Lisa Park',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/news/wearable-tech',
        image: '/images/gadgets-image2.jpg',
      },
      {
        id: '03',
        category: 'ANALYSIS',
        title: 'How smart home technology is evolving in unexpected ways',
        author: 'Kevin Martinez',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/analysis/smart-home',
        image: '/images/gadgets-image3.jpg',
      },
      {
        id: '04',
        category: 'COMPARISON',
        title: 'AR vs VR: Which technology will dominate the future?',
        author: 'Olivia Wilson',
        date: 'Feb 17, 2019',
        readTime: '3 min read',
        link: '/comparison/ar-vr',
        image: '/images/gadgets-image4.jpg',
      },
    ]
  };

  // State for active category and hovered item
  const [activeCategory, setActiveCategory] = useState('Accessibility');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [selectedItem, setSelectedItem] = useState('01');
  
  // Get current items based on active category
  const currentItems = contentByCategory[activeCategory] || [];

  // Handle hover events
  const handleItemHover = (id) => {
    setHoveredItem(id);
  };

  const handleItemLeave = () => {
    setHoveredItem(null);
  };

  // Set selected item when hover ends
  useEffect(() => {
    if (hoveredItem) {
      setSelectedItem(hoveredItem);
    }
  }, [hoveredItem]);

  // Reset selected item when changing tabs
  useEffect(() => {
    setSelectedItem('01');
    setHoveredItem(null);
  }, [activeCategory]);

  // Get the item to display image for
  const getItemForImage = () => {
    const itemId = hoveredItem || selectedItem;
    const foundItem = currentItems.find(item => item.id === itemId);
    return foundItem || currentItems[0];
  };
  
  // Current item to display image for
  const currentDisplayItem = getItemForImage();

  // Get the appropriate top margin based on item ID
  const getImageMarginTop = (itemId) => {
    switch(itemId) {
      case '01':
        return '0'; // 1st-2nd row
      case '02':
        return '150px'; // 2nd-3rd row
      case '03':
      case '04':
        return '400px'; // 3rd-4th row
      default:
        return '0';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Most Popular</h1>
      
      {/* Category tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className={`px-4 py-2 rounded-md border ${
              activeCategory === category
                ? 'bg-blue-500 text-white border-blue-500'
                : 'border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Content grid - desktop view */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        <div className="col-span-2 space-y-8">
          {currentItems.map((item) => (
            <Link 
              href={item.link} 
              key={item.id}
              className="block"
            >
              <div 
                className="relative pb-6"
                onMouseEnter={() => handleItemHover(item.id)}
                onMouseLeave={handleItemLeave}
              >
                <div className="flex gap-4 mb-2">
                  <span className="text-gray-500">{item.id}</span>
                  <span className="text-red-500 uppercase">{item.category}</span>
                </div>
                
                <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
                
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-4">
                  <span className="font-medium">{item.author}</span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                </div>
                
                <div className="flex gap-4 text-gray-400">
                  <span>f</span>
                  <span>i</span>
                  <span>x</span>
                  <span>l</span>
                </div>
                
                {/* Animated blue line on hover/selected */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200">
                  <div 
                    className="h-full bg-blue-500 transition-all duration-300 ease-in-out" 
                    style={{ 
                      width: (hoveredItem === item.id || selectedItem === item.id) ? '100%' : '0%'
                    }}
                  ></div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Image column - displays image for current hovered/selected item */}
        <div className="hidden md:block self-start" style={{
          marginTop: getImageMarginTop(currentDisplayItem?.id)
        }}>
          {currentDisplayItem && (
            <Link href={currentDisplayItem.link}>
              <div className="rounded-xl overflow-hidden aspect-square flex items-center justify-center">
                <img 
                  src={currentDisplayItem.image}
                  alt={currentDisplayItem.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </Link>
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className="md:hidden grid grid-cols-1 gap-6">
        {currentItems.map((item, index) => (
          <Link
            key={index}
            href={item.link}
            className="block relative rounded-xl border p-4 shadow-sm bg-white hover:shadow-md transition-all duration-200"
          >
            {/* 📸 Image */}
            <div className="mb-4 rounded-xl overflow-hidden">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="flex gap-4 mb-2 text-sm">
              <span className="text-gray-500">{item.id}</span>
              <span className="text-red-500 uppercase">{item.category}</span>
            </div>

            <h2 className="text-xl font-bold mb-2">{item.title}</h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 text-sm text-gray-600">
              <span>{item.author}</span>
              <div className="flex items-center gap-2">
                <span>{item.date}</span>
                <span>•</span>
                <span>{item.readTime}</span>
              </div>
            </div>

            <div className="flex gap-4 text-gray-400 text-xs">
              <span>f</span>
              <span>i</span>
              <span>x</span>
              <span>l</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TabsContent;