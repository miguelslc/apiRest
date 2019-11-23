import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CreateProducts from "./components/create-products.component";
/* import EditProducts from "./components/edit-products.component";
import ProductsList from "./components/products-list.component"; */

function App() {
  return (<Router>
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/create-products"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-products"} className="nav-link">
                  Create Products
                </Link>
              </Nav>

              <Nav>
                <Link to={"/edit-products/:id"} className="nav-link">
                  Edit Products
                </Link>
              </Nav>

              <Nav>
                <Link to={"/products-list"} className="nav-link">
                  Products List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>
      </header>

      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                <Route exact path='/' component={CreateProducts} />
                <Route path="/create-products" component={CreateProducts} />
                {/* <Route path="/edit-products/:id" component={EditProducts} />
                <Route path="/products-list" component={ProductsList} /> */}
              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </Router>);
}

export default App;