import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Navbar, Nav, Container} from 'react-bootstrap';
import Home from './Home';
import Users from './Users';
import About from './About';
import {Link, Route, BrowserRouter as Router, Routes, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
        <router>
          <Navbar bg="primary" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="PWA APP">Navbar</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/users">Users</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
              </Nav>
            </Container>
          </Navbar>
          <Routes>
            <Route path='/about' Component={About}></Route>
            <Route path='/users' Component={Users}></Route>
            <Route path='/' Component={Home}></Route>
          </Routes> 
        </router>
    </div>
  );
}

export default App;
