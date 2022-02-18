import { useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout"
import { auth } from './firebase'
import { useStateValue } from "./StateProvider";

function App() {

  const [{loggedinuser}, dispatch] = useStateValue()

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((userauth) => {
    if(userauth){
      dispatch({
        type: 'SET_LOGIN',
        user: userauth
      })
    }else{
      dispatch({
        type: 'SET_LOGIN',
        user: null
      })
    }
  })
  return () => {
    unsubscribe()
  }
},[])

// console.log("user ", user)

  return (
    <Router>
      <div className="App">
        {" "}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header /> <Home /> <Footer />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header /> <Checkout/>
              </>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
