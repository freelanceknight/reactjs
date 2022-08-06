import React,{ Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherForecast from "./weatherForecast";
import TodoList from "./todoList";
export default class Header extends Component{
    render() {
        return(
            <Router>
                <div>

                    <Navbar bg="light" expand="lg">
                        <Container>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link><Link to="/todoList">To-Do List</Link></Nav.Link>
                                    <Nav.Link><Link to="/weatherForecast">Weather Forecast</Link></Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </div>
                <Routes>
                    <Route path="/todoList" element={<TodoList/>}/>
                    <Route path="/weatherForecast" element={<WeatherForecast/>}/>
                </Routes>
            </Router>


        );
    }
}
