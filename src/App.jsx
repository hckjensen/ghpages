

import './App.css'

import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import Gallery from './pages/Gallery.jsx'
import About from './pages/About.jsx'
import Layout from './layout/layout.jsx'
import Home from './pages/Home.jsx'

function App() {

  // const base = "/ghpages"


  return (
    <Router>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />

        </Route>


      </Routes>


    </Router>
  )
}

export default App
