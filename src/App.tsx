import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Files from "./pages/Files";
import Teams from "./pages/Teams";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          {/* Authentication/Sign-in page */}
          <Route path="/" element={<Index />} />

          {/* Landing page */}
          <Route path="/landing" element={<Landing />} />

          {/* Main App Routes */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/files" element={<Files />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />

          {/* Additional placeholder routes for future expansion */}
          <Route
            path="/analytics"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 font-primary">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <h1 className="text-2xl font-semibold text-primary-text mb-2">
                    Analytics
                  </h1>
                  <p className="text-gray-600">
                    Usage analytics and insights coming soon...
                  </p>
                </div>
              </div>
            }
          />
          <Route
            path="/integrations"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 font-primary">
                <div className="text-center">
                  <div className="text-4xl mb-4">🔗</div>
                  <h1 className="text-2xl font-semibold text-primary-text mb-2">
                    Integrations
                  </h1>
                  <p className="text-gray-600">
                    Third-party integrations coming soon...
                  </p>
                </div>
              </div>
            }
          />
          <Route
            path="/templates"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 font-primary">
                <div className="text-center">
                  <div className="text-4xl mb-4">📋</div>
                  <h1 className="text-2xl font-semibold text-primary-text mb-2">
                    Templates
                  </h1>
                  <p className="text-gray-600">
                    Design templates gallery coming soon...
                  </p>
                </div>
              </div>
            }
          />
          <Route
            path="/settings"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-50 font-primary">
                <div className="text-center">
                  <div className="text-4xl mb-4">⚙️</div>
                  <h1 className="text-2xl font-semibold text-primary-text mb-2">
                    Settings
                  </h1>
                  <p className="text-gray-600">
                    Application settings coming soon...
                  </p>
                </div>
              </div>
            }
          />

          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
