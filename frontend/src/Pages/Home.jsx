import React from 'react'
import Navbar from '../components/home/Navbar.jsx'
import Navbar2 from '../components/home/Navbar2.jsx'
import ShoppingCard from '../components/home/ShoppingCard.jsx'
import { products } from '../utils/Products.js'
import LoadMore from '../components/home/LoadMore.jsx'
const Home = () => {
  return (
    <div>
      <Navbar />
      <Navbar2/>
      <div className="grid px-20 py-10 grid-cols-3 gap-5">
        {products.map((product, index) => (
          <ShoppingCard key={index} card={product} />
        ))}
      </div>
      <LoadMore/>
    </div>
  )
}

export default Home
