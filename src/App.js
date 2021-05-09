import "./style.scss";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Projects from "./pages/projejcts/Projects";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";

require("dotenv").config();

function App() {
  return (
    <Router>
      <Container>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/projects" component={Projects} />
          <Route path="/about" component={About} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
