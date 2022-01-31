import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Header />
        <Login />
      </div>
    </Router>
  );
}

export default App;
