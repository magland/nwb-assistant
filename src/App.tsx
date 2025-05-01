import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ChatPage from './pages/ChatPage';

function App() {
  const [windowDimensions, setWindowDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  const headerHeight = 60; // Fixed header height in pixels

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
        <header>
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
