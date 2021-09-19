import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "pages/auth/Login";
import Register from "pages/auth/Register";
import Landing from "pages/Landing";
import Navbar from "components/Navbar";
import About from "pages/About";
import Blog from "pages/Blog";
import Technologies from "pages/Technologies";

function App() {
  return (
    <Router>
      <Switch>
        <Route>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/blog">
              <Blog />
            </Route>
            <Route path="/technologies">
              <Technologies />
            </Route>
          </Switch>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
