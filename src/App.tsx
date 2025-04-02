import HomePage from "./sections/HomePage"
import NavBar from "./sections/NavBar"
import Footer from "./sections/Footer"

function App() {
  return (
    <div  className="min-h-[100vh] bg-white dark:bg-gray-900">
    <NavBar />
    <HomePage />
    <Footer />
    </div>
  )
}

export default App
