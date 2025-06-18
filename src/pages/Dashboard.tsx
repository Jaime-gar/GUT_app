import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [user] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
  });

  const recentFiles = [
    {
      id: 1,
      name: "Design System",
      type: "Figma",
      lastModified: "2 hours ago",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=80&fit=crop&auto=format",
      collaborators: 3,
      status: "active",
    },
    {
      id: 2,
      name: "Mobile App Wireframes",
      type: "Figma",
      lastModified: "1 day ago",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=120&h=80&fit=crop&auto=format",
      collaborators: 2,
      status: "review",
    },
    {
      id: 3,
      name: "Landing Page",
      type: "Figma",
      lastModified: "3 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=120&h=80&fit=crop&auto=format",
      collaborators: 5,
      status: "completed",
    },
    {
      id: 4,
      name: "Component Library",
      type: "Figma",
      lastModified: "1 week ago",
      thumbnail:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=120&h=80&fit=crop&auto=format",
      collaborators: 4,
      status: "active",
    },
  ];

  const teams = [
    {
      id: 1,
      name: "Design Team",
      members: 8,
      avatar:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=40&h=40&fit=crop&auto=format",
      color: "bg-blue-500",
    },
    {
      id: 2,
      name: "Product Team",
      members: 12,
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=40&h=40&fit=crop&auto=format",
      color: "bg-green-500",
    },
    {
      id: 3,
      name: "Marketing",
      members: 6,
      avatar:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=40&h=40&fit=crop&auto=format",
      color: "bg-purple-500",
    },
  ];

  const notifications = [
    {
      id: 1,
      type: "comment",
      message: "Sarah Chen commented on Design System",
      time: "5 minutes ago",
      read: false,
    },
    {
      id: 2,
      type: "share",
      message: "Mike Johnson shared Mobile App Wireframes",
      time: "1 hour ago",
      read: false,
    },
    {
      id: 3,
      type: "invite",
      message: "You were invited to Marketing Team",
      time: "2 hours ago",
      read: true,
    },
  ];

  const stats = {
    totalFiles: 24,
    activeProjects: 6,
    teamMembers: 12,
    storageUsed: "2.3 GB",
    storageTotal: "10 GB",
  };

  return (
    <div className="min-h-screen bg-gray-50 font-primary">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo and Navigation */}
            <div className="flex items-center space-x-8">
              <Link to="/dashboard" className="flex items-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="mr-3"
                >
                  <path
                    d="M20 20C20 16.6863 22.6863 14 26 14C29.3137 14 32 16.6863 32 20C32 23.3137 29.3137 26 26 26C22.6863 26 20 23.3137 20 20Z"
                    fill="#1ABCFE"
                  />
                  <path
                    d="M8 32C8 28.6863 10.6863 26 14 26H20V32C20 35.3137 17.3137 38 14 38C10.6863 38 8 35.3137 8 32Z"
                    fill="#0ACF83"
                  />
                  <path
                    d="M20 2V14H26C29.3137 14 32 11.3137 32 8C32 4.68629 29.3137 2 26 2H20Z"
                    fill="#FF7262"
                  />
                  <path
                    d="M8 8C8 11.3137 10.6863 14 14 14H20V2H14C10.6863 2 8 4.68629 8 8Z"
                    fill="#F24E1E"
                  />
                  <path
                    d="M8 20C8 23.3137 10.6863 26 14 26H20V14H14C10.6863 14 8 16.6863 8 20Z"
                    fill="#A259FF"
                  />
                </svg>
                <span className="text-xl font-semibold text-primary-text">
                  Figma
                </span>
              </Link>

              {/* Global Search */}
              <div className="hidden md:block relative">
                <svg
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search files..."
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-design-md focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                />
              </div>

              <nav className="hidden lg:flex space-x-6">
                <Link to="/dashboard" className="text-primary-text font-medium">
                  Dashboard
                </Link>
                <Link
                  to="/files"
                  className="text-gray-600 hover:text-primary-text transition-colors"
                >
                  Files
                </Link>
                <Link
                  to="/teams"
                  className="text-gray-600 hover:text-primary-text transition-colors"
                >
                  Teams
                </Link>
                <Link
                  to="/search"
                  className="text-gray-600 hover:text-primary-text transition-colors"
                >
                  Search
                </Link>
              </nav>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Notifications */}
              <div className="relative">
                <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5-5V9.09c0-1.96-1.58-3.55-3.53-3.55S8 7.13 8 9.09V12l-5 5h5m7 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </button>
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </div>

              {/* New File Button */}
              <button className="bg-button-primary-bg text-button-primary-text px-4 py-2 rounded-design-md text-sm font-medium hover:bg-gray-800 transition-colors">
                New File
              </button>

              {/* User Profile */}
              <div className="flex items-center space-x-3">
                <Link to="/profile">
                  <img
                    className="w-8 h-8 rounded-full hover:ring-2 hover:ring-blue-500 transition-all"
                    src={user.avatar}
                    alt={user.name}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-primary-text mb-2">
            Good morning, {user.name.split(" ")[0]}! 👋
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your projects today.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Files</p>
                <p className="text-3xl font-bold text-primary-text">
                  {stats.totalFiles}
                </p>
                <p className="text-sm text-green-600">+3 this week</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Active Projects
                </p>
                <p className="text-3xl font-bold text-primary-text">
                  {stats.activeProjects}
                </p>
                <p className="text-sm text-blue-600">2 due this week</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Team Members
                </p>
                <p className="text-3xl font-bold text-primary-text">
                  {stats.teamMembers}
                </p>
                <p className="text-sm text-purple-600">3 teams</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">
                  Storage Used
                </p>
                <p className="text-3xl font-bold text-primary-text">
                  {stats.storageUsed}
                </p>
                <p className="text-sm text-gray-600">of {stats.storageTotal}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4v16a2 2 0 002 2h6a2 2 0 002-2V4M13 10h-2M9 16h6"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-primary-text mb-4">
                Quick Actions
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 hover:bg-blue-50 transition-all group">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200">
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">New Design</p>
                    <p className="text-sm text-gray-600">Start fresh</p>
                  </div>
                </button>

                <button className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-400 hover:bg-green-50 transition-all group">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200">
                    <svg
                      className="w-5 h-5 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Import File</p>
                    <p className="text-sm text-gray-600">Upload design</p>
                  </div>
                </button>

                <Link
                  to="/templates"
                  className="flex items-center space-x-3 p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-400 hover:bg-purple-50 transition-all group"
                >
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200">
                    <svg
                      className="w-5 h-5 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Use Template</p>
                    <p className="text-sm text-gray-600">Browse library</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Recent Files */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold text-primary-text">
                  Recent Files
                </h3>
                <Link
                  to="/files"
                  className="text-accent-blue hover:underline text-sm font-medium"
                >
                  View all files
                </Link>
              </div>

              <div className="space-y-4">
                {recentFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <img
                      src={file.thumbnail}
                      alt={file.name}
                      className="w-12 h-8 object-cover rounded"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-primary-text truncate">
                        {file.name}
                      </h4>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{file.type}</span>
                        <span>{file.lastModified}</span>
                        <span>{file.collaborators} collaborators</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          file.status === "active"
                            ? "bg-green-100 text-green-800"
                            : file.status === "review"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {file.status}
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Teams */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-primary-text">
                  Your Teams
                </h3>
                <Link
                  to="/teams"
                  className="text-accent-blue hover:underline text-sm font-medium"
                >
                  View all
                </Link>
              </div>
              <div className="space-y-3">
                {teams.map((team) => (
                  <Link
                    key={team.id}
                    to="/teams"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div
                      className={`w-10 h-10 ${team.color} rounded-lg flex items-center justify-center`}
                    >
                      <span className="text-white font-semibold text-sm">
                        {team.name
                          .split(" ")
                          .map((word) => word[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-primary-text">
                        {team.name}
                      </p>
                      <p className="text-sm text-gray-600">
                        {team.members} members
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-primary-text mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg border-l-4 ${
                      notification.read
                        ? "bg-gray-50 border-gray-300"
                        : "bg-blue-50 border-blue-400"
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        notification.read
                          ? "text-gray-700"
                          : "text-gray-900 font-medium"
                      }`}
                    >
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
