import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Index'
import Home from './components/Home/index'
import About from './components/About/index'
import Sidebar from './components/Sidebar/index'
import Contact from './components/Contact/index'


function App() {
  return (
    <>
      <Sidebar />
      <Layout />
      <Routes>
        <Route path="/react-portfolio" element={<Layout />} />
        <Route index element={<Home />} />
        <Route path="about" index element={<About />} />
        <Route path="contact" index element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
