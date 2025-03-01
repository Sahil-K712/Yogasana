import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: 'communityFeed', label: 'Community Feed', path: '/community-feed' },
        { id: 'trainingCalendar', label: 'Training Calendar', path: '/training-calendar' },
        { id: 'myActivities', label: 'My Activities', path: '/my-activities' },
        { id: 'learnYoga', label: 'Learn Yoga', path: '/learn-yoga' },
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 max-w-6xl">
                <div className="flex justify-between items-center">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="h-8 w-8 bg-purple-600 rounded-md flex items-center justify-center">
                            <span className="text-white font-bold text-lg">Y</span>
                        </div>
                        <span className="text-xl font-semibold text-gray-800">YogAsna</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-800 transition-colors duration-200"
                            >
                                <span className="font-medium">YogAsna Community</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                                >
                                    <path d="m6 9 6 6 6-6" />
                                </svg>
                            </button>

                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-100">
                                    {navItems.map((item) => (
                                        <NavLink
                                            key={item.id}
                                            to={item.path}
                                            className={({ isActive }) =>
                                                `block w-full text-left px-4 py-2 hover:bg-purple-50 transition-colors duration-150 ${isActive ? 'text-purple-700 font-medium bg-purple-50' : 'text-gray-700'
                                                }`
                                            }
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.label}
                                        </NavLink>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Navigation Toggle */}
                    <button className="md:hidden p-2 rounded-md hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
                        <Menu size={24} />
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2">
                        {navItems.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    `block w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors duration-150 ${isActive ? 'text-purple-700 font-medium bg-purple-50' : 'text-gray-700'
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
