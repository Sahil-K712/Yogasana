import React, { useState, useEffect } from 'react';
import { MessageSquare, Heart, Award, Clock, Camera, Share2, Bookmark } from 'lucide-react';

const CommunityFeed = () => {
  // State for posts, loading state, and filter
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [showPostModal, setShowPostModal] = useState(false);
  const [follow, setFollow] = useState({});

  // New state for post creation
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostImage, setNewPostImage] = useState(null);
  const [newPostImagePreview, setNewPostImagePreview] = useState('');
  const [newPostImageCaption, setNewPostImageCaption] = useState('');
  const [asanas, setAsanas] = useState([{ name: '', count: 1, difficulty: 1 }]);

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

  // NEW FUNCTIONS FOR POST MODAL FUNCTIONALITY

  // Handle file input change for photo upload
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Create a preview URL for the selected image
      const imageUrl = URL.createObjectURL(file);
      setNewPostImage(file);
      setNewPostImagePreview(imageUrl);
    }
  };

  // Remove uploaded photo
  const removePhoto = () => {
    setNewPostImage(null);
    setNewPostImagePreview('');
    setNewPostImageCaption('');
  };

  // Handle asana input changes
  const handleAsanaChange = (index, field, value) => {
    const updatedAsanas = [...asanas];
    updatedAsanas[index][field] = value;
    setAsanas(updatedAsanas);
  };

  // Add a new asana field
  const addAsanaField = () => {
    setAsanas([...asanas, { name: '', count: 1, difficulty: 1 }]);
  };

  // Remove an asana field
  const removeAsanaField = (index) => {
    const updatedAsanas = [...asanas];
    updatedAsanas.splice(index, 1);
    setAsanas(updatedAsanas);
  };

  // Create a new post
  const createPost = () => {
    // Filter out empty asanas
    const validAsanas = asanas.filter(asana => asana.name.trim() !== '');

    // Validate post content
    if (newPostContent.trim() === '' && validAsanas.length === 0 && !newPostImage) {
      alert('Please add some content to your post');
      return;
    }

    // Create new post object
    const newPost = {
      id: posts.length + 1,
      user: {
        name: 'Your Name', // In a real app, this would come from user profile
        avatar: '/user.png', // user image
        level: 'Intermediate' // In a real app, this would come from user profile
      },
      time: 'Just now',
      content: newPostContent,
      asanas: validAsanas,
      likes: 0,
      comments: 0,
      liked: false,
      saved: false,
      image: newPostImagePreview,
      imageCaption: newPostImageCaption
    };

    // Add new post to the beginning of the posts array
    setPosts([newPost, ...posts]);

    // Reset form and close modal
    resetPostForm();
    setShowPostModal(false);
  };

  // Reset post form
  const resetPostForm = () => {
    setNewPostContent('');
    setNewPostImage(null);
    setNewPostImagePreview('');
    setNewPostImageCaption('');
    setAsanas([{ name: '', count: 1, difficulty: 1 }]);
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

          <button
            onClick={() => setShowPostModal(true)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center space-x-2 shadow-sm"
          >
            <span>New Post</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
          </button>
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

      {/* New Post Modal - UPDATED */}
      {showPostModal && (
        <div className="fixed inset-0 bg-purple-600 bg-opacity-50 flex justify-center items-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-lg max-h-90vh overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-gray-800">Create New Post</h3>
              <button
                onClick={() => {
                  resetPostForm();
                  setShowPostModal(false);
                }}
                className="text-gray-500 hover:text-gray-700 p-1 rounded-full hover:bg-gray-100"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Share your yoga practice..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg resize-none h-32 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              ></textarea>
            </div>

            <div className="mb-4 p-4 border border-gray-200 rounded-lg bg-gray-50">
              <div className="flex justify-between items-center mb-3">
                <h4 className="font-medium text-gray-700">Add Asanas</h4>
                <button
                  className="text-purple-600 hover:text-purple-800 text-sm font-medium"
                  onClick={addAsanaField}
                >
                  + Add More
                </button>
              </div>

              {asanas.map((asana, index) => (
                <div key={index} className="mb-2">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="Asana name"
                      value={asana.name}
                      onChange={(e) => handleAsanaChange(index, 'name', e.target.value)}
                      className="mt-5 flex-1 p-2  border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
                    />
                    <div className="flex gap-2">
                      <div className="flex flex-col">
                      <label className="text-sm text-gray-500">Count</label>
                        <input
                          type="number"
                          placeholder="Count"
                          value={asana.count}
                          onChange={(e) => handleAsanaChange(index, 'count', parseInt(e.target.value) || 1)}
                          className="w-full sm:w-20 p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
                          min="1"
                        />
                      </div>

                      <div className="flex flex-col">
                        <label className="text-sm text-gray-500">Difficulty</label>
                        <select
                            className="w-full sm:w-auto p-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-purple-400"
                            value={asana.difficulty}
                            onChange={(e) => handleAsanaChange(index, 'difficulty', parseInt(e.target.value))}
                        >
                            <option value="1">1 ★</option>
                            <option value="2">2 ★</option>
                            <option value="3">3 ★</option>
                            <option value="4">4 ★</option>
                            <option value="5">5 ★</option>
                        </select>
                      </div>

                      {asanas.length > 1 && (
                        <button
                          onClick={() => removeAsanaField(index)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded"
                          aria-label="Remove asana"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Photo upload area - UPDATED */}
            <div className="mb-6">
              {newPostImagePreview ? (
                <div className="relative rounded-lg overflow-hidden mb-2">
                  <img
                    src={newPostImagePreview}
                    alt="Selected"
                    className="w-full h-48 object-cover"
                  />
                  <button
                    onClick={removePhoto}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 shadow hover:bg-red-100"
                    aria-label="Remove photo"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <input
                    type="text"
                    placeholder="Add a caption for your photo..."
                    value={newPostImageCaption}
                    onChange={(e) => setNewPostImageCaption(e.target.value)}
                    className="w-full p-2 border-t border-gray-200"
                  />
                </div>
              ) : (
                <label className="flex items-center gap-2 w-full justify-center p-4 border-2 border-dashed border-gray-300 rounded-lg text-gray-500 hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-300 cursor-pointer">
                  <Camera size={20} />
                  <span>Add Photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoUpload}
                  />
                </label>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  resetPostForm();
                  setShowPostModal(false);
                }}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors shadow-sm"
                onClick={createPost}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommunityFeed;