import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './pages/Dashboard';
import { Auth } from './pages/Auth';
import { useThemeStore } from './store/useThemeStore';
import { useDealsStore } from './store/useDealsStore';
import { useAuthStore } from './store/useAuthStore';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isDarkMode } = useThemeStore();
  const { fetchDeals, fetchSharks } = useDealsStore();
  const { fetchProfile } = useAuthStore();

  useEffect(() => {
    fetchDeals();
    fetchSharks();
    fetchProfile();
  }, [fetchDeals, fetchSharks, fetchProfile]);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <Router>
      <div className={`min-h-screen ${
        isDarkMode ? 'bg-[#121212] text-[#E0E0E0]' : 'bg-[#F5F5F5] text-[#5D87FF]'
      }`}>
        <Navbar toggleSidebar={toggleSidebar} />
        <Sidebar isOpen={isSidebarOpen} />
        
        <main className={`pt-16 ${isSidebarOpen ? 'ml-64' : 'ml-0'} transition-margin duration-300`}>
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sharks" element={<div>Sharks Coming Soon</div>} />
              <Route path="/deals" element={<div>Deals Coming Soon</div>} />
              <Route path="/analytics" element={<div>Analytics Coming Soon</div>} />
              <Route path="/deal-table" element={<div>Deal Table Coming Soon</div>} />
              <Route path="/predictions" element={<div>Predictions Coming Soon</div>} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<div>Profile Coming Soon</div>} />
              <Route path="/settings" element={<div>Settings Coming Soon</div>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;