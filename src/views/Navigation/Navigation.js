import React from "react";
import "./Navigation.scss"
import { Link, NavLink } from "react-router-dom";
class Navigation extends React.Component {

    render() {

        return (
            <div className="topnav">

                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/user" activeClassName="active">
                    User
                </NavLink>

                {/* <Link to="/">Home</Link>
                <Link to="/todo">Todo</Link>
                <Link to="/contract">Contact</Link>
                <Link to="/about">Home</Link> */}
                {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="#contact">Contact</a>
                <a href="/about ">About</a> */}
            </div>
        )
    }
}
export default Navigation;