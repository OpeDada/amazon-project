import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        {" "}
        <Switch>
          <Route exact path="/" element={<Header />} />
          <Route path="/checkout" element={<Header />} />
          <Route path="/login" element={<Login />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
