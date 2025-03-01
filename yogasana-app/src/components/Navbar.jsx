import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Remove Register from main navItems
    const navItems = [
        { id: 'dashboard', label: 'Dashboard', path: '/dashboard' },
        { id: 'about', label: 'About', path: '/about' },
        { id: 'leaderboard', label: 'Leaderboard', path: '/leaderboard' },
        {
            id: 'communityDropdown', label: 'YogAsna Community', isDropdown: true, children: [
                { id: 'communityFeed', label: 'Community Feed', path: '/community-feed' },
                { id: 'trainingCalendar', label: 'Training Calendar', path: '/training-calendar' },
                { id: 'myActivities', label: 'My Activities', path: '/my-activities' },
                { id: 'learnYoga', label: 'Learn Yoga', path: '/learn-yoga' },
            ]
        }
    ];

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 py-3 max-w-6xl">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/logo.jpg" alt="YogAsana Logo" className="h-15 w-15 rounded-md object-cover" />
                        <span className="text-2xl font-semibold text-gray-800">YogAsana</span>
                    </Link>

                    {/* Desktop Navigation - Split into left and right sections */}
                    <div className="hidden md:flex md:flex-1 md:justify-between items-center">
                        {/* Left aligned navigation links */}
                        <div className="flex space-x-6 items-center ml-8">
                            {navItems.map((item) => !item.isDropdown ? (
                                <NavLink
                                    key={item.id}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        `px-3 py-2 rounded-lg transition-colors duration-150 text-lg font-medium ${isActive ? 'text-purple-700 bg-purple-50' : 'text-gray-700 hover:bg-purple-50'
                                        }`
                                    }
                                >
                                    {item.label}
                                </NavLink>
                            ) : (
                                <div key={item.id} className="relative">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-purple-50 text-gray-700 transition-colors duration-200 text-lg font-medium"
                                    >
                                        <span>{item.label}</span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="18"
                                            height="18"
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
                                        <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-10 border border-gray-100">
                                            {item.children.map((child) => (
                                                <NavLink
                                                    key={child.id}
                                                    to={child.path}
                                                    className={({ isActive }) =>
                                                        `block w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors duration-150 text-base ${isActive ? 'text-purple-700 font-medium bg-purple-50' : 'text-gray-700'
                                                        }`
                                                    }
                                                    onClick={() => setIsOpen(false)}
                                                >
                                                    {child.label}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Right aligned register button */}
                        <div>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    `px-5 py-2 rounded-lg transition-colors duration-150 text-lg font-medium ${isActive
                                        ? 'bg-purple-700 text-white'
                                        : 'bg-purple-600 text-white hover:bg-purple-700'
                                    }`
                                }
                            >
                                Register
                            </NavLink>
                        </div>
                    </div>

                    {/* Mobile Navigation Toggle and Register button */}
                    <div className="md:hidden flex items-center space-x-3">
                        <NavLink
                            to="/register"
                            className={({ isActive }) =>
                                `px-4 py-2 rounded-lg text-base font-medium transition-colors duration-150 ${isActive
                                    ? 'bg-purple-700 text-white'
                                    : 'bg-purple-600 text-white hover:bg-purple-700'
                                }`
                            }
                        >
                            Register
                        </NavLink>
                        <button className="p-2 rounded-md hover:bg-gray-100" onClick={() => setIsOpen(!isOpen)}>
                            <Menu size={28} />
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isOpen && (
                    <div className="md:hidden mt-2">
                        {navItems.map((item) => !item.isDropdown ? (
                            <NavLink
                                key={item.id}
                                to={item.path}
                                className={({ isActive }) =>
                                    `block w-full text-left px-4 py-3 hover:bg-purple-50 transition-colors duration-150 text-lg ${isActive ? 'text-purple-700 font-medium bg-purple-50' : 'text-gray-700'
                                    }`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </NavLink>
                        ) : (
                            <div key={item.id}>
                                <div className="px-4 py-3 font-medium text-gray-700 text-lg">
                                    {item.label}
                                </div>
                                {item.children.map((child) => (
                                    <NavLink
                                        key={child.id}
                                        to={child.path}
                                        className={({ isActive }) =>
                                            `block w-full text-left pl-8 px-4 py-3 hover:bg-purple-50 transition-colors duration-150 text-base ${isActive ? 'text-purple-700 font-medium bg-purple-50' : 'text-gray-700'
                                            }`
                                        }
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {child.label}
                                    </NavLink>
                                ))}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;