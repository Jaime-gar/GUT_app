import { useState } from "react";
import { Link } from "react-router-dom";

const Files = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");

  const files = [
    {
      id: 1,
      name: "Design System",
      type: "Figma",
      size: "2.4 MB",
      lastModified: "2 hours ago",
      owner: "You",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=120&h=80&fit=crop&auto=format",
      shared: true,
    },
    {
      id: 2,
      name: "Mobile App Wireframes",
      type: "Figma",
      size: "1.8 MB",
      lastModified: "1 day ago",
      owner: "Sarah Chen",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=120&h=80&fit=crop&auto=format",
      shared: false,
    },
    {
      id: 3,
      name: "Landing Page",
      type: "Figma",
      size: "3.2 MB",
      lastModified: "3 days ago",
      owner: "You",
      thumbnail:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=120&h=80&fit=crop&auto=format",
      shared: true,
    },
    {
      id: 4,
      name: "Component Library",
      type: "Figma",
      size: "4.1 MB",
      lastModified: "1 week ago",
      owner: "Mike Johnson",
      thumbnail:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=120&h=80&fit=crop&auto=format",
      shared: true,
    },
    {
      id: 5,
      name: "User Research Findings",
      type: "FigJam",
      size: "856 KB",
      lastModified: "2 weeks ago",
      owner: "Emma Wilson",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=120&h=80&fit=crop&auto=format",
      shared: false,
    },
    {
      id: 6,
      name: "Brand Guidelines",
      type: "Figma",
      size: "5.7 MB",
      lastModified: "3 weeks ago",
      owner: "You",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=120&h=80&fit=crop&auto=format",
      shared: true,
    },
  ];

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesFilter =
      selectedFilter === "all" ||
      (selectedFilter === "shared" && file.shared) ||
      (selectedFilter === "owned" && file.owner === "You") ||
      (selectedFilter === "figma" && file.type === "Figma") ||
      (selectedFilter === "figjam" && file.type === "FigJam");
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-primary">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
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
              <nav className="hidden md:flex space-x-6">
                <Link
                  to="/dashboard"
                  className="text-gray-600 hover:text-primary-text transition-colors"
                >
                  Dashboard
                </Link>
                <Link to="/files" className="text-primary-text font-medium">
                  Files
                </Link>
                <Link
                  to="/teams"
                  className="text-gray-600 hover:text-primary-text transition-colors"
                >
                  Teams
                </Link>
              </nav>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button className="bg-button-primary-bg text-button-primary-text px-4 py-2 rounded-design-md text-sm font-medium hover:bg-gray-800 transition-colors">
                New File
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-primary-text mb-2">
            Files
          </h1>
          <p className="text-gray-600">Manage and organize your design files</p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-design-md focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-design-md focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="all">All Files</option>
                <option value="owned">Owned by me</option>
                <option value="shared">Shared with me</option>
                <option value="figma">Figma</option>
                <option value="figjam">FigJam</option>
              </select>

              <button className="flex items-center space-x-2 px-3 py-2 border border-gray-300 rounded-design-md hover:bg-gray-50 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z"
                  />
                </svg>
                <span>Sort</span>
              </button>
            </div>
          </div>
        </div>

        {/* Files Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredFiles.map((file) => (
            <div
              key={file.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="aspect-video bg-gray-100 relative overflow-hidden">
                <img
                  src={file.thumbnail}
                  alt={file.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                />
                {file.shared && (
                  <div className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm">
                    <svg
                      className="w-4 h-4 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z"
                      />
                    </svg>
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary-text mb-1 truncate">
                  {file.name}
                </h3>
                <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
                  <span className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 ${file.type === "Figma" ? "bg-purple-500" : "bg-blue-500"}`}
                    ></div>
                    {file.type}
                  </span>
                  <span>{file.size}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{file.owner}</span>
                  <span>{file.lastModified}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredFiles.length === 0 && (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No files found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Files;
