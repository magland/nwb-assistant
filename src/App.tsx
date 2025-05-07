import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatPage from './pages/ChatPage';

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
        <header style={{ height: headerHeight, display: 'flex', alignItems: 'center', padding: '0 20px', backgroundColor: '#282c34', color: 'white', fontFamily: 'Comfortaa, sans-serif' }}>
          <h1><Link to="/nwb-assistant/" style={{ textDecoration: 'none', color: 'inherit' }}>NWB Assistant</Link></h1>
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
