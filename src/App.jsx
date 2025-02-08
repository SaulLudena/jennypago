import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'
import Menu from './components/Menu/menu'
import IndexPage from './pages/index'
import ProductPage from './pages/product'
import ContactPage from './pages/contact'
import LocationPage from './pages/location'
function App() {
  return (
    <div className="h-screen pt-sans-regular">
      <Router>
        <div className="grid grid-cols-5 grid-rows-[1fr_5fr_1fr] h-screen ">
          <Header />
          <Routes>
            <Route path="/" element={<IndexPage />}></Route>
            <Route path="/product" element={<ProductPage />}></Route>
            <Route path="/contact" element={<ContactPage />}></Route>
            <Route path="/location" element={<LocationPage />}></Route>
          </Routes>
          <Menu />
        </div>
      </Router>
    </div>
  )
}

export default App
