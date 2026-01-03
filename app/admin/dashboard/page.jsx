'use client';

import { useState, useEffect, useRef } from 'react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Chart from 'chart.js/auto';
import './styles.css';

// Import view components
import OwnerView from '../../../components/admin/OwnerView';
import OverviewView from '../../../components/admin/OverviewView';
import QueriesView from '../../../components/admin/QueriesView';
import MarketplaceView from '../../../components/admin/MarketplaceView';
import SettingsView from '../../../components/admin/SettingsView';

export default function AdminDashboard() {
  const supabase = createClientComponentClient();
  
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentView, setCurrentView] = useState('owner'); // Default to Owner Analytics
  const [theme, setTheme] = useState('light');
  const [loginError, setLoginError] = useState('');
  
  // Session timeout management
  const sessionTimeoutRef = useRef(null);
  const SESSION_TIMEOUT = 15 * 60 * 1000; // 15 minutes

  // Navigation items with Owner Analytics first
  const navItems = [
    { 
      id: 'owner', 
      label: 'Owner Analytics', 
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
      badge: 'NEW'
    },
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' 
    },
    { 
      id: 'queries', 
      label: 'DB Queries', 
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4' 
    },
    { 
      id: 'marketplace', 
      label: 'Marketplace', 
      icon: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' 
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' 
    }
  ];

  // Session timeout functions
  const startSessionTimeout = () => {
    clearSessionTimeout();
    sessionTimeoutRef.current = setTimeout(() => {
      handleSessionTimeout();
    }, SESSION_TIMEOUT);
  };

  const clearSessionTimeout = () => {
    if (sessionTimeoutRef.current) {
      clearTimeout(sessionTimeoutRef.current);
      sessionTimeoutRef.current = null;
    }
  };

  const resetSessionTimeout = () => {
    if (currentUser) {
      startSessionTimeout();
    }
  };

  const handleSessionTimeout = async () => {
    alert('Session expired due to inactivity. Please log in again.');
    await handleLogout();
  };

  // Activity listeners to reset timeout
  useEffect(() => {
    if (!currentUser) return;

    const events = ['mousedown', 'keydown', 'scroll', 'touchstart', 'click'];
    const resetTimeout = () => resetSessionTimeout();
    
    events.forEach(event => {
      document.addEventListener(event, resetTimeout);
    });

    startSessionTimeout();

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, resetTimeout);
      });
      clearSessionTimeout();
    };
  }, [currentUser]);

  // Check auth on mount
  useEffect(() => {
    checkAuth();
    
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  async function checkAuth() {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      
      if (user) {
        const { data: profile } = await supabase
          .from('user_profiles')
          .select('role, email')
          .eq('id', user.id)
          .single();
          
        if (profile?.role === 'admin') {
          setCurrentUser({ ...user, email: profile.email });
          setIsLoading(false);
          return;
        }
      }
      
      setCurrentUser(null);
      setIsLoading(false);
    } catch (error) {
      console.error('Auth check error:', error);
      setCurrentUser(null);
      setIsLoading(false);
    }
  }

  async function handleLogin(e) {
    e.preventDefault();
    setLoginError('');
    
    const email = e.target.email.value;
    const password = e.target.password.value;
    
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      
      if (error) throw error;
      
      const { data: profile } = await supabase
        .from('user_profiles')
        .select('role')
        .eq('id', data.user.id)
        .single();
        
      if (profile?.role !== 'admin') {
        await supabase.auth.signOut();
        throw new Error('Access denied: Admin role required');
      }
      
      setCurrentUser(data.user);
    } catch (error) {
      console.error('Login error:', error);
      setLoginError(error.message || 'Invalid credentials');
    }
  }

  async function handleLogout() {
    clearSessionTimeout();
    await supabase.auth.signOut();
    setCurrentUser(null);
  }

  function switchView(view) {
    setCurrentView(view);
  }

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }

  // Show loading
  if (isLoading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', background: 'var(--bg-secondary)' }}>
        <div style={{ color: 'var(--text-primary)' }}>Loading...</div>
      </div>
    );
  }

  // Show login screen
  if (!currentUser) {
    return (
      <div className="login-overlay">
        <div className="login-card">
          <div className="login-brand">
            <img src="/images/AI_20ChatWorks.svg" alt="AI ChatWorks" onError={(e) => e.target.style.display = 'none'} />
            <div className="login-brand-text">
              <h1>AI ChatWorks</h1>
              <span>Admin Dashboard</span>
            </div>
          </div>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email Address</label>
              <input type="email" name="email" placeholder="admin@example.com" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" name="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary">
              Sign In
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
            </button>
            {loginError && (
              <div className="error-message" style={{ display: 'flex' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                {loginError}
              </div>
            )}
          </form>
          
          <div className="session-notice">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>Sessions expire after 15 minutes of inactivity</span>
          </div>
        </div>
      </div>
    );
  }

  // Main dashboard
  return (
    <div className="app-shell">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header-group">
          <div className="sidebar-logo">
            <img src="/images/AI_20ChatWorks.svg" alt="AI ChatWorks" onError={(e) => e.target.style.display = 'none'} />
            <div className="sidebar-brand-text">
              <h2>AI ChatWorks</h2>
              <span>Admin Dashboard</span>
            </div>
          </div>
        </div>

        <nav>
          {navItems.map(item => (
            <div 
              key={item.id}
              className={`nav-link ${currentView === item.id ? 'active' : ''}`} 
              onClick={() => switchView(item.id)}
            >
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d={item.icon} />
              </svg>
              {item.label}
              {item.badge && (
                <span className="nav-badge" style={{ marginLeft: 'auto', background: '#10b981', fontSize: '9px', padding: '2px 6px' }}>
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="user-profile-section">
          <div className="user-card">
            <div className="user-avatar">{currentUser?.email?.substring(0, 2).toUpperCase()}</div>
            <div className="user-info">
              <div className="user-name">{currentUser?.email?.split('@')[0]}</div>
              <div className="user-role">Super Admin</div>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Sign Out
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Render active view */}
        <div className={`view-container ${currentView === 'owner' ? 'active' : ''}`}>
          {currentView === 'owner' && <OwnerView supabase={supabase} />}
        </div>
        <div className={`view-container ${currentView === 'overview' ? 'active' : ''}`}>
          {currentView === 'overview' && <OverviewView supabase={supabase} />}
        </div>
        <div className={`view-container ${currentView === 'queries' ? 'active' : ''}`}>
          {currentView === 'queries' && <QueriesView supabase={supabase} />}
        </div>
        <div className={`view-container ${currentView === 'marketplace' ? 'active' : ''}`}>
          {currentView === 'marketplace' && <MarketplaceView supabase={supabase} user={currentUser} />}
        </div>
        <div className={`view-container ${currentView === 'settings' ? 'active' : ''}`}>
          {currentView === 'settings' && <SettingsView user={currentUser} supabase={supabase} />}
        </div>
      </main>
    </div>
  );
}
