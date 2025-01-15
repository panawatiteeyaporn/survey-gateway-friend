import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Heart, X, PlaneLanding } from 'lucide-react';
import { useRouter } from 'next/router';

const topics = [
  {
    id: 1,
    title: 'City',
    description: 'Explore vibrant urban landscapes and cultural hotspots',
    image: '/api/placeholder/600/400'
  },
  {
    id: 2,
    title: 'Activity',
    description: 'Find exciting adventures and experiences',
    image: '/api/placeholder/600/400'
  },
  {
    id: 3,
    title: 'Summer',
    description: 'Discover perfect summer getaways and beach destinations',
    image: '/api/placeholder/600/400'
  },
  {
    id: 4,
    title: 'Traveling Solo',
    description: 'Best destinations and tips for solo travelers',
    image: '/api/placeholder/600/400'
  },
  {
    id: 5,
    title: 'History',
    description: 'Journey through time with historical destinations',
    image: '/api/placeholder/600/400'
  }
];

const SwipeSearch = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedTopics, setLikedTopics] = useState([]);
  const [animation, setAnimation] = useState('');

  const handleLike = () => {
    if (currentIndex < topics.length) {
      setLikedTopics([...likedTopics, topics[currentIndex]]);
      setAnimation('slide-right');
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setAnimation('');
      }, 300);
    }
  };

  const handleDislike = () => {
    if (currentIndex < topics.length) {
      setAnimation('slide-left');
      setTimeout(() => {
        setCurrentIndex(currentIndex + 1);
        setAnimation('');
      }, 300);
    }
  };

  const handleNavigateToRecommendations = () => {
    toast.success("Thank you for completing our survey!", {
      position: "top-center",
      duration: 3000,
    });
    setTimeout(() => navigate('/recommendations'), 3000);
  };

  if (currentIndex >= topics.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-bold text-center mb-6">Your Travel Preferences</h2>
          {likedTopics.length > 0 ? (
            <div className="space-y-4 mb-8">
              {likedTopics.map(topic => (
                <div key={topic.id} className="flex items-center space-x-2 text-orange-500">
                  <Heart size={20} className="fill-current" />
                  <span>{topic.title}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 mb-8">No preferences selected</p>
          )}
          
          <button
            onClick={handleNavigateToRecommendations}
            className="w-full py-4 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center space-x-2 font-semibold"
          >
            <PlaneLanding size={24} />
            <span>To my next holiday!</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className={`relative max-w-md w-full bg-white rounded-lg shadow-lg overflow-hidden ${animation}`}>
        <img
          src={topics[currentIndex].image}
          alt={topics[currentIndex].title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-orange-500 mb-2">
            {topics[currentIndex].title}
          </h2>
          <p className="text-gray-600 mb-6">
            {topics[currentIndex].description}
          </p>
          <div className="flex justify-center space-x-6">
            <button
              onClick={handleDislike}
              className="p-4 bg-white border-2 border-red-500 rounded-full text-red-500 hover:bg-red-50 transition-colors"
            >
              <X size={24} />
            </button>
            <button
              onClick={handleLike}
              className="p-4 bg-white border-2 border-orange-500 rounded-full text-orange-500 hover:bg-orange-50 transition-colors"
            >
              <Heart size={24} />
            </button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .slide-left {
          animation: slideLeft 0.3s ease-out;
        }
        
        .slide-right {
          animation: slideRight 0.3s ease-out;
        }
        
        @keyframes slideLeft {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
        
        @keyframes slideRight {
          from {
            transform: translateX(0);
            opacity: 1;
          }
          to {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default SwipeSearch;
