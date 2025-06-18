import { useState } from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState("");
  const [inviteRole, setInviteRole] = useState("editor");

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      email: "sarah@company.com",
      role: "Admin",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face&auto=format",
      lastActive: "2 hours ago",
      status: "online",
    },
    {
      id: 2,
      name: "Mike Johnson",
      email: "mike@company.com",
      role: "Editor",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face&auto=format",
      lastActive: "1 day ago",
      status: "offline",
    },
    {
      id: 3,
      name: "Emma Wilson",
      email: "emma@company.com",
      role: "Viewer",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face&auto=format",
      lastActive: "3 hours ago",
      status: "online",
    },
    {
      id: 4,
      name: "Alex Rodriguez",
      email: "alex@company.com",
      role: "Editor",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format",
      lastActive: "5 minutes ago",
      status: "online",
    },
  ];

  const teamProjects = [
    {
      id: 1,
      name: "Design System 2024",
      description: "Complete redesign of our component library",
      members: 4,
      files: 12,
      lastUpdated: "2 hours ago",
      status: "active",
    },
    {
      id: 2,
      name: "Mobile App Redesign",
      description: "New mobile experience for our main product",
      members: 3,
      files: 8,
      lastUpdated: "1 day ago",
      status: "active",
    },
    {
      id: 3,
      name: "Marketing Website",
      description: "Landing pages and marketing materials",
      members: 2,
      files: 15,
      lastUpdated: "3 days ago",
      status: "completed",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      user: "Sarah Chen",
      action: "updated",
      target: "Design System Components",
      time: "2 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 2,
      user: "Mike Johnson",
      action: "commented on",
      target: "Mobile Navigation Flow",
      time: "4 hours ago",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 3,
      user: "Emma Wilson",
      action: "shared",
      target: "User Research Findings",
      time: "1 day ago",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face&auto=format",
    },
    {
      id: 4,
      user: "Alex Rodriguez",
      action: "created",
      target: "Wireframe Templates",
      time: "2 days ago",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format",
    },
  ];

  const handleInviteMember = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Inviting:", inviteEmail, "as", inviteRole);
    setShowInviteModal(false);
    setInviteEmail("");
    setInviteRole("editor");
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: "📊" },
    { id: "members", label: "Members", icon: "👥" },
    { id: "projects", label: "Projects", icon: "📁" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

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
                <Link to="/teams" className="text-primary-text font-medium">
                  Teams
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setShowInviteModal(true)}
                className="bg-button-primary-bg text-button-primary-text px-4 py-2 rounded-design-md text-sm font-medium hover:bg-gray-800 transition-colors"
              >
                Invite Member
              </button>
              <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-primary-text mb-2">
            Design Team
          </h1>
          <p className="text-gray-600">
            Collaborate with your team and manage projects together
          </p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab.id
                  ? "border-blue-500 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Stats Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Team Members
                    </p>
                    <p className="text-3xl font-bold text-primary-text">
                      {teamMembers.length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">👥</span>
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
                      {teamProjects.filter((p) => p.status === "active").length}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📁</span>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">
                      Total Files
                    </p>
                    <p className="text-3xl font-bold text-primary-text">
                      {teamProjects.reduce((sum, p) => sum + p.files, 0)}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">📄</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:row-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-primary-text mb-4">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start space-x-3"
                    >
                      <img
                        src={activity.avatar}
                        alt={activity.user}
                        className="w-8 h-8 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900">
                          <span className="font-medium">{activity.user}</span>{" "}
                          {activity.action}{" "}
                          <span className="font-medium">{activity.target}</span>
                        </p>
                        <p className="text-xs text-gray-500">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Active Projects */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-semibold text-primary-text">
                    Active Projects
                  </h3>
                  <Link
                    to="#"
                    className="text-accent-blue hover:underline text-sm font-medium"
                  >
                    View all
                  </Link>
                </div>
                <div className="space-y-4">
                  {teamProjects
                    .filter((project) => project.status === "active")
                    .map((project) => (
                      <div
                        key={project.id}
                        className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex-1">
                          <h4 className="font-medium text-primary-text">
                            {project.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {project.description}
                          </p>
                          <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                            <span>{project.members} members</span>
                            <span>{project.files} files</span>
                            <span>Updated {project.lastUpdated}</span>
                          </div>
                        </div>
                        <button className="ml-4 text-accent-blue hover:text-blue-800">
                          →
                        </button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Members Tab */}
        {activeTab === "members" && (
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-primary-text">
                  Team Members ({teamMembers.length})
                </h3>
                <button
                  onClick={() => setShowInviteModal(true)}
                  className="bg-button-primary-bg text-button-primary-text px-4 py-2 rounded-design-md text-sm font-medium hover:bg-gray-800 transition-colors"
                >
                  Invite Member
                </button>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="p-6 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="w-12 h-12 rounded-full"
                      />
                      <div
                        className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                          member.status === "online"
                            ? "bg-green-400"
                            : "bg-gray-400"
                        }`}
                      ></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-text">
                        {member.name}
                      </h4>
                      <p className="text-sm text-gray-600">{member.email}</p>
                      <p className="text-xs text-gray-500">
                        Last active {member.lastActive}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        member.role === "Admin"
                          ? "bg-red-100 text-red-800"
                          : member.role === "Editor"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {member.role}
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
        )}

        {/* Projects Tab */}
        {activeTab === "projects" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {teamProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-primary-text">
                    {project.name}
                  </h3>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      project.status === "active"
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span>{project.members} members</span>
                    <span>{project.files} files</span>
                  </div>
                  <span>{project.lastUpdated}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="bg-white rounded-xl border border-gray-200 p-8">
            <div className="text-center py-12">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Team Settings
              </h3>
              <p className="text-gray-600">
                Team settings and administration options coming soon.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Invite Modal */}
      {showInviteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-primary-text">
                Invite Team Member
              </h3>
              <button
                onClick={() => setShowInviteModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <form onSubmit={handleInviteMember}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                  placeholder="colleague@company.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role
                </label>
                <select
                  value={inviteRole}
                  onChange={(e) => setInviteRole(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                >
                  <option value="viewer">Viewer</option>
                  <option value="editor">Editor</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => setShowInviteModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-design-md font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-button-primary-bg text-button-primary-text rounded-design-md font-medium hover:bg-gray-800"
                >
                  Send Invite
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
