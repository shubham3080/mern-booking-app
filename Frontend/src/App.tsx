import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from "./Layout/Layout"
import Register from "./pages/Resgister"
import SignIn from "./pages/SignIn"
import AddHotel from "./pages/AddHotel"
import { useAppContext } from "./Contexts/AppContext"
import MyHotels from "./pages/MyHotels"



function App() {

const {isLoggedIn}=useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><p>Home</p></Layout>}/>
        <Route path="/search" element={<Layout><p>Search</p></Layout>}/>
        <Route path="/register" element={<Layout><Register/></Layout>}/>
        <Route path="/sign-in" element={<Layout><SignIn/></Layout>}/>
        {isLoggedIn && (
          <>
          <Route path="/add-hotel" element={<Layout><AddHotel/></Layout>}/>
          <Route path="/my-hotels" element={<Layout><MyHotels/></Layout>}/>
          </>
        )}
      </Routes>
    </Router>
      
  )
}

export default App
