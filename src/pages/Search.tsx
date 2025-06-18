import { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [sortBy, setSortBy] = useState("relevance");

  const searchResults = [
    {
      id: 1,
      type: "file",
      name: "Mobile App Design System",
      description:
        "Complete design system with components, colors, and typography",
      owner: "Sarah Chen",
      lastModified: "2 hours ago",
      thumbnail:
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=200&h=150&fit=crop&auto=format",
      tags: ["design-system", "mobile", "components"],
      team: "Design Team",
    },
    {
      id: 2,
      type: "template",
      name: "E-commerce Landing Page",
      description: "High-converting landing page template for online stores",
      owner: "Figma Community",
      lastModified: "1 week ago",
      thumbnail:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=200&h=150&fit=crop&auto=format",
      tags: ["template", "e-commerce", "landing"],
      team: "Community",
    },
    {
      id: 3,
      type: "file",
      name: "User Research Dashboard",
      description: "Data visualization and analytics dashboard design",
      owner: "Mike Johnson",
      lastModified: "3 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=200&h=150&fit=crop&auto=format",
      tags: ["dashboard", "analytics", "research"],
      team: "Research Team",
    },
    {
      id: 4,
      type: "component",
      name: "Button Component Library",
      description:
        "Comprehensive button components with all states and variants",
      owner: "Alex Rodriguez",
      lastModified: "1 day ago",
      thumbnail:
        "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=200&h=150&fit=crop&auto=format",
      tags: ["components", "buttons", "ui"],
      team: "Design Team",
    },
    {
      id: 5,
      type: "file",
      name: "Brand Guidelines 2024",
      description: "Updated brand identity, logos, and visual guidelines",
      owner: "Emma Wilson",
      lastModified: "5 days ago",
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=200&h=150&fit=crop&auto=format",
      tags: ["brand", "guidelines", "identity"],
      team: "Marketing Team",
    },
    {
      id: 6,
      type: "template",
      name: "SaaS Dashboard Template",
      description: "Modern dashboard template for SaaS applications",
      owner: "Figma Community",
      lastModified: "2 weeks ago",
      thumbnail:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=150&fit=crop&auto=format",
      tags: ["template", "saas", "dashboard"],
      team: "Community",
    },
  ];

  const trendingSearches = [
    "design system",
    "mobile app",
    "dashboard",
    "landing page",
    "components",
    "wireframes",
    "prototypes",
    "icons",
  ];

  const recentSearches = [
    "button components",
    "navigation design",
    "user onboarding",
    "mobile wireframes",
  ];

  const filters = [
    { id: "all", label: "All", count: searchResults.length },
    {
      id: "files",
      label: "Files",
      count: searchResults.filter((r) => r.type === "file").length,
    },
    {
      id: "templates",
      label: "Templates",
      count: searchResults.filter((r) => r.type === "template").length,
    },
    {
      id: "components",
      label: "Components",
      count: searchResults.filter((r) => r.type === "component").length,
    },
  ];

  const filteredResults = searchResults.filter((result) => {
    const matchesFilter =
      activeFilter === "all" ||
      (activeFilter === "files" && result.type === "file") ||
      (activeFilter === "templates" && result.type === "template") ||
      (activeFilter === "components" && result.type === "component");

    const matchesSearch =
      searchQuery === "" ||
      result.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      result.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase()),
      );

    return matchesFilter && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "file":
        return "📄";
      case "template":
        return "📋";
      case "component":
        return "🧩";
      default:
        return "📄";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "file":
        return "bg-blue-100 text-blue-800";
      case "template":
        return "bg-green-100 text-green-800";
      case "component":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-primary">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
                <Link to="/search" className="text-primary-text font-medium">
                  Search
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-button-primary-bg text-button-primary-text px-4 py-2 rounded-design-md text-sm font-medium hover:bg-gray-800 transition-colors">
                New File
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-primary-text mb-4">
            Search & Discover
          </h1>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <svg
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
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
              placeholder="Search files, templates, components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            {/* Filters */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-primary-text mb-4">Filters</h3>
              <div className="space-y-2">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      activeFilter === filter.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="capitalize">{filter.label}</span>
                    <span className="text-sm text-gray-500">
                      {filter.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sort Options */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-primary-text mb-4">Sort by</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
              >
                <option value="relevance">Relevance</option>
                <option value="date">Last Modified</option>
                <option value="name">Name</option>
                <option value="owner">Owner</option>
              </select>
            </div>

            {/* Trending Searches */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
              <h3 className="font-semibold text-primary-text mb-4">Trending</h3>
              <div className="space-y-2">
                {trendingSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => setSearchQuery(search)}
                    className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-primary-text hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    🔥 {search}
                  </button>
                ))}
              </div>
            </div>

            {/* Recent Searches */}
            {recentSearches.length > 0 && (
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="font-semibold text-primary-text mb-4">Recent</h3>
                <div className="space-y-2">
                  {recentSearches.map((search, index) => (
                    <button
                      key={index}
                      onClick={() => setSearchQuery(search)}
                      className="block w-full text-left px-3 py-2 text-sm text-gray-600 hover:text-primary-text hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      🕒 {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                {filteredResults.length} results
                {searchQuery && ` for "${searchQuery}"`}
              </p>
              <div className="flex items-center space-x-4">
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
                      d="M4 6h16M4 10h16M4 14h16M4 18h16"
                    />
                  </svg>
                  <span>List</span>
                </button>
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
                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                    />
                  </svg>
                  <span>Grid</span>
                </button>
              </div>
            </div>

            {/* Results Grid */}
            {filteredResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredResults.map((result) => (
                  <div
                    key={result.id}
                    className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                  >
                    <div className="aspect-video bg-gray-100 relative overflow-hidden">
                      <img
                        src={result.thumbnail}
                        alt={result.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2 py-1 rounded-md text-xs font-medium ${getTypeColor(result.type)}`}
                        >
                          {getTypeIcon(result.type)} {result.type}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-primary-text mb-2 line-clamp-1">
                        {result.name}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                        {result.description}
                      </p>
                      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>by {result.owner}</span>
                        <span>{result.lastModified}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {result.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                          {result.tags.length > 2 && (
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs">
                              +{result.tags.length - 2}
                            </span>
                          )}
                        </div>
                        <span className="text-xs text-gray-500">
                          {result.team}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  No results found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
