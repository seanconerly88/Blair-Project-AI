import React from 'react';

const SocialMediaTracker = () => {
  const socialPosts = [
    { id: 1, school: 'Cornell University', content: 'Check out our new football facilities!', platform: 'Twitter' },
    { id: 2, school: 'Tufts University', content: 'Congratulations to our graduating seniors!', platform: 'Instagram' },
    { id: 3, school: 'Dartmouth College', content: 'Join us for the upcoming game day!', platform: 'Facebook' },
    { id: 4, school: 'Union College', content: 'New research opportunities available for undergrads!', platform: 'LinkedIn' },
    { id: 5, school: 'Brown University', content: 'Our basketball team made it to the finals!', platform: 'Twitter' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4 h-full flex flex-col">
      <div className="flex-grow overflow-y-auto" style={{ maxHeight: '300px' }}>
        {socialPosts.map((post) => (
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
