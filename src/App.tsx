import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatPage from './pages/ChatPage';
import { GITHUB_REPO_URL } from './config/constants';

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const headerHeight = 40; // Fixed header height in pixels

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="app">
        <header style={{ height: headerHeight, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', backgroundColor: '#282c34', color: 'white', fontFamily: 'Comfortaa, sans-serif' }}>
          <h1><Link to="/nwb-assistant/" style={{ textDecoration: 'none', color: 'inherit' }}>NWB Assistant</Link></h1>
          <a 
            href={GITHUB_REPO_URL} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              opacity: 0.8,
              transition: 'opacity 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '0.8'}
            title="View on GitHub"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </header>

        <Routes>
          <Route
            path="/nwb-assistant/"
            element={
              <Navigate to="/nwb-assistant/chat" />
            }
          />
          <Route
            path="/nwb-assistant/chat"
            element={
              <ChatPage
                width={windowDimensions.width}
                height={windowDimensions.height - headerHeight}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
