import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: "🎨",
      title: "Design Tools",
      description:
        "Professional design tools with vector editing, prototyping, and collaboration features.",
    },
    {
      icon: "👥",
      title: "Team Collaboration",
      description:
        "Work together in real-time with comments, shared libraries, and version control.",
    },
    {
      icon: "📱",
      title: "Prototyping",
      description:
        "Create interactive prototypes and test user flows without writing code.",
    },
    {
      icon: "🔄",
      title: "Version Control",
      description:
        "Track changes, manage versions, and restore previous iterations of your designs.",
    },
    {
      icon: "🚀",
      title: "Fast Performance",
      description:
        "Lightning-fast rendering and smooth interactions even with complex designs.",
    },
    {
      icon: "🌐",
      title: "Cross-Platform",
      description:
        "Access your designs from anywhere with our web-based platform.",
    },
  ];

  return (
    <div className="min-h-screen bg-primary-background font-primary">
      {/* Header */}
      <header className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex items-center">
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
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link
                to="#features"
                className="text-primary-text hover:text-accent-blue transition-colors"
              >
                Features
              </Link>
              <Link
                to="#pricing"
                className="text-primary-text hover:text-accent-blue transition-colors"
              >
                Pricing
              </Link>
              <Link
                to="#about"
                className="text-primary-text hover:text-accent-blue transition-colors"
              >
                About
              </Link>
              <Link
                to="#contact"
                className="text-primary-text hover:text-accent-blue transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-primary-text hover:text-accent-blue transition-colors font-medium"
              >
                Log in
              </Link>
              <Link
                to="/"
                className="bg-button-primary-bg text-button-primary-text px-6 py-2 rounded-design-md font-medium hover:bg-gray-800 transition-colors"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-primary-text mb-6 leading-tight">
              Design, prototype, and collaborate
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              The complete platform for digital design teams. Create, test, and
              ship better designs with the industry's most powerful design
              tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="bg-button-primary-bg text-button-primary-text px-8 py-4 rounded-design-md font-semibold text-lg hover:bg-gray-800 transition-colors"
              >
                Get started for free
              </Link>
              <button className="border border-button-border text-primary-text px-8 py-4 rounded-design-md font-semibold text-lg hover:bg-gray-50 transition-colors">
                Watch demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-4">
              Everything you need to design
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful features that help teams move faster and create better
              designs together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-primary-text mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
            Ready to start designing?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join millions of designers who trust Figma for their creative
            workflow.
          </p>
          <Link
            to="/"
            className="bg-button-primary-bg text-button-primary-text px-8 py-4 rounded-design-md font-semibold text-lg hover:bg-gray-800 transition-colors inline-block"
          >
            Start designing today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 40 40"
                  fill="none"
                  className="mr-2"
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
                <span className="font-semibold">Figma</span>
              </div>
              <p className="text-gray-400">
                The collaborative interface design tool.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Enterprise
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Figma. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
