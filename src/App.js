import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// pages
import { Home,Error, AboutPage, ServicePage, BlogPage, ContactPage } from './pages'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </Router>
    </div>
    
  );
}

export default App
