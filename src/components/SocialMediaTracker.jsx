import React from 'react';

const SocialMediaTracker = () => {
  const socialPosts = [
    { id: 1, school: 'University A', content: 'Check out our new football facilities!', platform: 'Twitter' },
    { id: 2, school: 'College B', content: 'Congratulations to our graduating seniors!', platform: 'Instagram' },
    { id: 3, school: 'Institute C', content: 'Join us for the upcoming game day!', platform: 'Facebook' },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {socialPosts.map((post) => (
        <div key={post.id} className="mb-4 p-3 border rounded hover:bg-purple-50">
          <h3 className="font-semibold text-purple-800">{post.school}</h3>
          <p className="text-sm text-purple-600">{post.platform}</p>
          <p className="mt-2">{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default SocialMediaTracker;
