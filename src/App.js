import "./style.scss";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Projects from "./pages/projejcts/Projects";
import Blog from "./pages/blog/Blog";
import About from "./pages/about/About";
import { Hello, Ufo } from "./components/icons/";

function App() {
  return (
    <Router>
      <Container>
        <Row className="header">
          <Col md={8}>
            <ul className="navbar">
              <li>
                <Link className="link" to="/">
                  <Ufo />
                </Link>
              </li>
              <li>
                <Link className="link" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <Link className="link" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="link" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <a className="meetButton" href="mailto: mihrilp@gmail.com">
              Let's Meet <Hello />
            </a>
          </Col>
        </Row>
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
