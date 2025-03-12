import './App.css'
import Header from './Components/Header'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Category from './Pages/Category'
import Products from './Pages/Products'
import product_data from './ProductData'

function App() {

  return (
    <>
    <Router>
      <Header/>

      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "category" element = {<Category  />}></Route>
        <Route path = "product/:itemID" element={<Products products = {product_data}/>}></Route>
      </Routes>
    
    </Router>
      
    </>
  )
}

export default App
