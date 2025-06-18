import { useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face&auto=format",
    title: "Senior Product Designer",
    company: "Design Studio Inc.",
    location: "San Francisco, CA",
    timezone: "Pacific Standard Time",
    bio: "Passionate designer focused on creating exceptional user experiences. I love working with teams to solve complex problems through design.",
  });

  const [activeTab, setActiveTab] = useState("profile");
  const [notifications, setNotifications] = useState({
    emailUpdates: true,
    projectUpdates: true,
    teamInvites: true,
    weeklyDigest: false,
    marketing: false,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    // Save logic would go here
    console.log("Profile updated:", user);
  };

  const tabs = [
    { id: "profile", label: "Profile", icon: "👤" },
    { id: "account", label: "Account", icon: "⚙️" },
    { id: "notifications", label: "Notifications", icon: "🔔" },
    { id: "security", label: "Security", icon: "🔒" },
    { id: "billing", label: "Billing", icon: "💳" },
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
                <Link to="/profile" className="text-primary-text font-medium">
                  Profile
                </Link>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/dashboard"
                className="text-gray-600 hover:text-primary-text transition-colors"
              >
                ← Back to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center space-x-3">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-primary-text">
                      {user.name}
                    </h3>
                    <p className="text-sm text-gray-600">{user.title}</p>
                  </div>
                </div>
              </div>
              <nav className="p-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? "bg-blue-50 text-blue-600 font-medium"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl border border-gray-200">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div className="p-8">
                  <div className="flex justify-between items-start mb-8">
                    <div>
                      <h1 className="text-2xl font-semibold text-primary-text mb-2">
                        Profile Information
                      </h1>
                      <p className="text-gray-600">
                        Update your personal information and profile details.
                      </p>
                    </div>
                    <button
                      onClick={() => setIsEditing(!isEditing)}
                      className={`px-4 py-2 rounded-design-md font-medium transition-colors ${
                        isEditing
                          ? "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          : "bg-button-primary-bg text-button-primary-text hover:bg-gray-800"
                      }`}
                    >
                      {isEditing ? "Cancel" : "Edit Profile"}
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Avatar */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Profile Photo
                      </label>
                      <div className="flex items-center space-x-6">
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="w-24 h-24 rounded-full"
                        />
                        {isEditing && (
                          <div className="flex space-x-4">
                            <button className="px-4 py-2 border border-gray-300 rounded-design-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                              Change
                            </button>
                            <button className="px-4 py-2 text-sm font-medium text-red-600 hover:text-red-800">
                              Remove
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={user.name}
                          onChange={(e) =>
                            setUser({ ...user, name: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        />
                      ) : (
                        <p className="text-primary-text py-2">{user.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={user.email}
                          onChange={(e) =>
                            setUser({ ...user, email: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        />
                      ) : (
                        <p className="text-primary-text py-2">{user.email}</p>
                      )}
                    </div>

                    {/* Title */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Job Title
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={user.title}
                          onChange={(e) =>
                            setUser({ ...user, title: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        />
                      ) : (
                        <p className="text-primary-text py-2">{user.title}</p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={user.company}
                          onChange={(e) =>
                            setUser({ ...user, company: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        />
                      ) : (
                        <p className="text-primary-text py-2">{user.company}</p>
                      )}
                    </div>

                    {/* Location */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={user.location}
                          onChange={(e) =>
                            setUser({ ...user, location: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        />
                      ) : (
                        <p className="text-primary-text py-2">
                          {user.location}
                        </p>
                      )}
                    </div>

                    {/* Timezone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      {isEditing ? (
                        <select
                          value={user.timezone}
                          onChange={(e) =>
                            setUser({ ...user, timezone: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                        >
                          <option value="Pacific Standard Time">
                            Pacific Standard Time
                          </option>
                          <option value="Mountain Standard Time">
                            Mountain Standard Time
                          </option>
                          <option value="Central Standard Time">
                            Central Standard Time
                          </option>
                          <option value="Eastern Standard Time">
                            Eastern Standard Time
                          </option>
                        </select>
                      ) : (
                        <p className="text-primary-text py-2">
                          {user.timezone}
                        </p>
                      )}
                    </div>

                    {/* Bio */}
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Bio
                      </label>
                      {isEditing ? (
                        <textarea
                          value={user.bio}
                          onChange={(e) =>
                            setUser({ ...user, bio: e.target.value })
                          }
                          rows={4}
                          className="w-full px-3 py-2 border border-gray-300 rounded-design-sm focus:ring-2 focus:ring-accent-blue focus:border-transparent"
                          placeholder="Tell us about yourself..."
                        />
                      ) : (
                        <p className="text-primary-text py-2">{user.bio}</p>
                      )}
                    </div>
                  </div>

                  {isEditing && (
                    <div className="flex justify-end space-x-4 mt-8 pt-6 border-t border-gray-200">
                      <button
                        onClick={() => setIsEditing(false)}
                        className="px-6 py-2 border border-gray-300 rounded-design-md font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSave}
                        className="px-6 py-2 bg-button-primary-bg text-button-primary-text rounded-design-md font-medium hover:bg-gray-800"
                      >
                        Save Changes
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === "notifications" && (
                <div className="p-8">
                  <div className="mb-8">
                    <h1 className="text-2xl font-semibold text-primary-text mb-2">
                      Notification Preferences
                    </h1>
                    <p className="text-gray-600">
                      Choose how you want to be notified about activity.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {Object.entries(notifications).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between py-4 border-b border-gray-200 last:border-b-0"
                      >
                        <div>
                          <h3 className="font-medium text-primary-text capitalize">
                            {key.replace(/([A-Z])/g, " $1").trim()}
                          </h3>
                          <p className="text-sm text-gray-600">
                            {key === "emailUpdates" &&
                              "Receive email notifications for important updates"}
                            {key === "projectUpdates" &&
                              "Get notified when projects you're involved in are updated"}
                            {key === "teamInvites" &&
                              "Receive notifications for team invitations"}
                            {key === "weeklyDigest" &&
                              "Get a weekly summary of your activity"}
                            {key === "marketing" &&
                              "Receive marketing emails and product announcements"}
                          </p>
                        </div>
                        <label className="flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) =>
                              setNotifications({
                                ...notifications,
                                [key]: e.target.checked,
                              })
                            }
                            className="sr-only"
                          />
                          <div
                            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                              value ? "bg-blue-600" : "bg-gray-200"
                            }`}
                          >
                            <span
                              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                                value ? "translate-x-6" : "translate-x-1"
                              }`}
                            />
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
                    <button className="px-6 py-2 bg-button-primary-bg text-button-primary-text rounded-design-md font-medium hover:bg-gray-800">
                      Save Preferences
                    </button>
                  </div>
                </div>
              )}

              {/* Other tabs placeholder */}
              {["account", "security", "billing"].includes(activeTab) && (
                <div className="p-8">
                  <div className="text-center py-12">
                    <div className="text-4xl mb-4">
                      {activeTab === "account" && "⚙️"}
                      {activeTab === "security" && "🔒"}
                      {activeTab === "billing" && "💳"}
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2 capitalize">
                      {activeTab} Settings
                    </h3>
                    <p className="text-gray-600">
                      {activeTab} settings will be available here soon.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
