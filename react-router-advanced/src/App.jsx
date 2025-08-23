// App.jsx
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import BlogPost from "./pages/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/posts/42">Blog Post 42</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route Example */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Route Example */}
        <Route path="/posts/:id" element={<BlogPost />} />
      </Routes>
    </Router>
  );
}

export default App;
