import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Award, Clock, Camera, Share2, Bookmark } from 'lucide-react';

const CommunityFeed = () => {
  // State for posts, loading state, and filter
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [follow, setFollow] = useState({});

  // Simulate fetching data
  useEffect(() => {
    // This would be replaced with an actual API call
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          user: {
            name: 'Anika Sharma',
            avatar: 'https://tse1.mm.bing.net/th?id=OIP.tG4Krsh7kL4QznVe9WfS0QHaE7&pid=Api&P=0&h=180',
            level: 'Advanced'
          },
          time: '2 hours ago',
          content: 'Just completed 12 Surya Namaskars in the morning! Great way to start the day. #MorningRoutine #YogaJourney',
          asanas: [
            { name: 'Surya Namaskar', count: 12, difficulty: 3 }
          ],
          likes: 24,
          comments: 5,
          liked: false,
          saved: false,
          image: 'https://i.ytimg.com/vi/BOlydiuO50A/maxresdefault.jpg',
          imageCaption: 'Morning yoga session at sunrise'
        },
        {
          id: 2,
          user: {
            name: 'Raj Patel',
            avatar: 'https://tse2.mm.bing.net/th?id=OIP.uNMUtpjTKQSSTg8W9sedngAAAA&pid=Api&P=0&h=180',
            level: 'Intermediate'
          },
          time: '5 hours ago',
          content: 'Finally mastered Bakasana (Crow Pose) after weeks of practice! Also did Padmasana and Vajrasana during my evening session. #YogaProgress',
          asanas: [
            { name: 'Bakasana', count: 3, difficulty: 4 },
            { name: 'Padmasana', count: 1, difficulty: 2 },
            { name: 'Vajrasana', count: 1, difficulty: 1 }
          ],
          likes: 42,
          comments: 8,
          liked: true,
          saved: true,
          image: 'https://i.ytimg.com/vi/ET_PtWnHTQo/maxresdefault.jpg',
          imageCaption: 'Evening yoga practice - finally got the crow pose!'
        },
        {
          id: 3,
          user: {
            name: 'Maya Williams',
            avatar: 'https://tse3.mm.bing.net/th?id=OIP.s-y7RwKWOVCXU5CQE6XixAHaFW&pid=Api&P=0&h=180',
            level: 'Beginner'
          },
          time: 'Yesterday',
          content: 'Started my yoga journey today with basic poses. Feeling great and looking forward to learning more! Any tips for beginners? #NewToYoga #BeginnerYogi',
          asanas: [
            { name: 'Tadasana', count: 2, difficulty: 1 },
            { name: 'Balasana', count: 3, difficulty: 1 }
          ],
          likes: 18,
          comments: 12,
          liked: false,
          saved: false,
          image: 'http://dressageridertraining.com/wp-content/uploads/2015/05/DSC_0438.jpg',
          imageCaption: 'My first day of yoga practice'
        },
        {
          id: 4,
          user: {
            name: 'Christie Chen',
            avatar: 'https://tse3.mm.bing.net/th?id=OIP.ONDU3Dv2Yyeaj7W03oemrwAAAA&pid=Api&P=0&h=180',
            level: 'Advanced'
          },
          time: '1 day ago',
          content: 'Joined an amazing outdoor yoga session today at the outshore Beach. The energy was incredible! #OutdoorYoga #Community',
          asanas: [
            { name: 'Vrikshasana', count: 2, difficulty: 2 },
            { name: 'Trikonasana', count: 4, difficulty: 2 },
            { name: 'Adho Mukha Svanasana', count: 5, difficulty: 3 }
          ],
          likes: 56,
          comments: 14,
          liked: false,
          saved: false,
          image: 'https://www.beatoapp.com/blog/wp-content/uploads/2024/03/Vrikshasana-Tree-Pose-Benefits.webp',
          imageCaption: 'Group yoga session at outshore Beach'
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  // Handle like function
  const handleLike = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.liked ? post.likes - 1 : post.likes + 1,
          liked: !post.liked
        };
      }
      return post;
    }));
  };

  // Handle save function
  const handleSave = (postId) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          saved: !post.saved
        };
      }
      return post;
    }));
  };

  // Function to render difficulty stars
  const renderDifficulty = (level) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span
          key={i}
          className={`text-sm ${i < level ? 'text-yellow-400' : 'text-gray-300'}`}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  // Function to filter posts
  const getFilteredPosts = () => {
    if (filter === 'all') return posts;
    if (filter === 'beginner') return posts.filter(post => post.user.level === 'Beginner');
    if (filter === 'intermediate') return posts.filter(post => post.user.level === 'Intermediate');
    if (filter === 'advanced') return posts.filter(post => post.user.level === 'Advanced');
    return posts;
  };

  // Function to extract and make hashtags clickable
  const renderContentWithHashtags = (content) => {
    const parts = content.split(/(#\w+)/g);
    return parts.map((part, index) => {
      if (part.startsWith('#')) {
        return (
          <span key={index} className="text-purple-600 hover:underline cursor-pointer font-medium">
            {part}
          </span>
        );
      }
      return part;
    });
  };

  // follow function
  const handleFollow = (userId) => {
    setFollow(prev => ({
      ...prev,
      [userId]: !prev[userId]
    }));
  };


  return (
    <div className="max-w-5xl mx-auto px-4 py-6 bg-gray-50 min-h-screen">
      {/* Header with filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sticky top-0 bg-gray-50 pt-2 pb-4 z-10">
        <h1 className="text-2xl font-bold text-gray-800">Community Feed</h1>

        <div className="flex flex-wrap gap-2">
          <div className="flex bg-gray-100 rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'all' ? 'bg-white shadow text-purple-700' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('beginner')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'beginner' ? 'bg-white shadow text-purple-700' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              Beginner
            </button>
            <button
              onClick={() => setFilter('intermediate')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'intermediate' ? 'bg-white shadow text-purple-700' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              Intermediate
            </button>
            <button
              onClick={() => setFilter('advanced')}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors duration-200 ${filter === 'advanced' ? 'bg-white shadow text-purple-700' : 'text-gray-600 hover:bg-gray-200'}`}
            >
              Advanced
            </button>
          </div>

        </div>
      </div>

      {/* Loading state */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        /* Community Posts */
        <div className="space-y-6">
          {getFilteredPosts().length > 0 ? (
            getFilteredPosts().map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow p-8 hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={post.user.avatar}
                    alt={post.user.name}
                    className="w-20 h-20 rounded-full object-cover border border-gray-200"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-800 truncate">{post.user.name}</h3>
                        <div className="flex items-center flex-wrap gap-2 mt-1 text-sm text-gray-500">
                          <span className="inline-block px-2 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                            {post.user.level}
                          </span>
                          <span className="flex items-center">
                            <Clock size={14} className="mr-1 flex-shrink-0" />
                            {post.time}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="mt-3 text-gray-700 whitespace-pre-line">{renderContentWithHashtags(post.content)}</p>

                    {/* Post Image with improved responsive sizing */}
                    {post.image && (
                      <div className="mt-3 relative rounded-lg overflow-hidden">
                        <div className="aspect-video w-full">
                          <img
                            src={post.image}
                            alt={post.imageCaption || "Yoga practice"}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        {post.imageCaption && (
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm backdrop-blur-sm">
                            {post.imageCaption}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Asanas List */}
                    {post.asanas && post.asanas.length > 0 && (
                      <div className="mt-4 space-y-2">
                        {post.asanas.map((asana, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center bg-gray-50 p-2 rounded-lg border border-gray-100 hover:border-purple-100 transition-colors"
                          >
                            <div className="flex items-center overflow-hidden">
                              <Award size={16} className="text-purple-500 mr-2 flex-shrink-0" />
                              <span className="font-medium text-gray-700 truncate">{asana.name}</span>
                              <span className="ml-2 text-sm text-gray-500 flex-shrink-0">x{asana.count}</span>
                            </div>
                            <div className="flex flex-shrink-0">
                              {renderDifficulty(asana.difficulty)}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Post Actions */}
                    <div className="mt-4 flex items-center justify-between border-t pt-3">
                      <div className="flex gap-1 sm:gap-2">
                        <button
                          className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-md transition-colors duration-200 ${post.liked ? 'text-red-500 bg-red-50' : 'text-gray-500 hover:bg-gray-100'}`}
                          onClick={() => handleLike(post.id)}
                          aria-label={post.liked ? "Unlike" : "Like"}
                        >
                          <Heart size={20} className={`${post.liked ? 'fill-current' : ''}`} />
                          <span>{post.likes}</span>
                        </button>

                        <button
                          className="flex items-center gap-1 px-2 sm:px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                          aria-label="Comment"
                        >
                          <MessageSquare size={20} />
                          <span>{post.comments}</span>
                        </button>
                      </div>

                      <div className="flex gap-1 sm:gap-2">
                        <button
                          className="flex items-center px-2 sm:px-3 py-1 rounded-md text-gray-500 hover:bg-gray-100 transition-colors duration-200"
                          aria-label="Share"
                        >
                          <Share2 size={20} />
                        </button>

                        <button
                          className={`flex items-center px-2 sm:px-3 py-1 rounded-md transition-colors duration-200 ${post.saved ? 'text-purple-500 bg-purple-50' : 'text-gray-500 hover:bg-gray-100'}`}
                          onClick={() => handleSave(post.id)}
                          aria-label={post.saved ? "Unsave" : "Save"}
                        >
                          <Bookmark size={20} className={post.saved ? 'fill-current' : ''} />
                        </button>
                        <button
                          onClick={() => handleFollow(post.id)}
                          className={`px-6 py-3 text-sm font-medium rounded-lg transition ${follow[post.id]
                            ? 'bg-gray-300 text-gray-700 hover:bg-gray-400'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                            }`}
                        >
                          {follow[post.id] ? 'Following' : 'Follow'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <div className="text-gray-500 mb-2">No posts found for this filter</div>
              <button
                onClick={() => setFilter('all')}
                className="text-purple-600 font-medium hover:underline"
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommunityFeed;