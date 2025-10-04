import reactLogo from './assets/react.svg'
import './App.css'
import ProductCard from './components/ProductCard'
import Header from './components/header'

function App() {
  const mockproduct={
      "id": 1,
      "name": "Wireless Headphones",
    "description": {"desc": "Noise-cancelling over-ear headphones with 30 hours of battery life.","category": "Electronics", },
      "price": 149.99,
      "stock": 34,
      
      "image": "./assets/react.svg"
    }
  return (
    <>
      <Header/>
      <div className='bg-center'>product card
      <ProductCard product={mockproduct} />
      </div>
    </>
  )
}

export default App
