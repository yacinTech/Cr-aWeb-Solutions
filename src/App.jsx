import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Footer from './components/Footer';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Blog from './pages/BlogList';
import BlogPost from './pages/BlogPost';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPost />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
