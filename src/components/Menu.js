import React from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddBook from "./AddBook";
import SignUp from "./reg";
//import SignIn from "./Login";

const Menu = () => {
        return(
            <Router>
                <Navbar>
                    <NabarLi><NabarA><Link class="nbar" to="/" >Bookmark</Link></NabarA></NabarLi>
                    <NabarLi><NabarA><Link class="nbar" to="/MainPage" >Dashboard</Link></NabarA></NabarLi>
                    <NabarLi><NabarA><Link class="nbar" to="/AddBook" >Thêm sách</Link></NabarA></NabarLi>
                    <NabarLi><NabarA><Link class="nbar" to="/SignUp" >SignUp</Link></NabarA></NabarLi>
                </Navbar>
                <Switch>
                    <Route path="/AddBook"><AddBook /></Route>
                    <Route path="/SignUp"><SignUp /></Route>
                </Switch>
            </Router>    
        )
    }

export default Menu;
const Navbar = styled.ul`
    background-color:white;
    display:grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    
`;
const NabarLi = styled.li `
    padding:10px;
    list-style:none;
`;
const NabarA = styled.a `
    color:#140202;
    font-size:20px;
    text-transform:uppercase;
    text-decoration:none;
    &:hover{
        opacity:0.8;
        color:red;
    }
`;