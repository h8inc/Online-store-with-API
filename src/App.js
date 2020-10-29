import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import CounterExample from "./Components/CounterExample";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Views/Home";
import About from "./Views/About";
import Product from "./Views/Product";

function App() {
  return (
    <div className="relative pb-10 min-h-screen">
      <Router>
        <Header />
        <div className="p-3 py-6">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
