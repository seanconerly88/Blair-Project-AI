import React, { useState, useEffect } from 'react';

const SocialMediaTracker = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const socialPosts = [
    { id: 1, school: 'Cornell University', content: 'Check out our new football facilities!', platform: 'Twitter' },
    { id: 2, school: 'Tufts University', content: 'Congratulations to our graduating seniors!', platform: 'Instagram' },
    { id: 3, school: 'Dartmouth College', content: 'Join us for the upcoming game day!', platform: 'Facebook' },
    { id: 4, school: 'Union College', content: 'New research opportunities available for undergrads!', platform: 'LinkedIn' },
    { id: 5, school: 'Brown University', content: 'Our basketball team made it to the finals!', platform: 'Twitter' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (socialPosts.length - 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [socialPosts.length]);

  return (
    <div className="bg-white rounded-lg shadow p-4 h-full overflow-hidden flex flex-col">
      <div className="flex-grow overflow-y-auto">
        {socialPosts.slice(currentIndex, currentIndex + 2).map((post) => (
          <div key={post.id} className="mb-4 p-3 border rounded hover:bg-purple-50">
            <h3 className="font-semibold text-purple-800">{post.school}</h3>
            <p className="text-sm text-purple-600">{post.platform}</p>
            <p className="mt-2">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaTracker;
