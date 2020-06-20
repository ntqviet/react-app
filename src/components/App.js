import React from 'react';
import styled from 'styled-components'
//import Menu from "./Menu";
import MainPage from "./MainPage";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import AddBook from "./AddBook";
import SignUp from "./reg";
import SignIn from "./Login";

export default class App extends React.Component{
state = {
    Books:[]
}
componentDidMount(){
    this.setState({Books: this.props.Books})
}
setBook = (BookId) => {
    const Book = this.state.Books.find(Book => Book.id === BookId);
    const BookList = this.state.Books.filter(Book => Book.id !== BookId);
    const newBook = {
        id:Book.id,
        name:Book.name,
        image:Book.image,
        page:Book.page,
        isComplete:!Book.isComplete,
        isTrash:Book.isTrash
    }
    this.setState({Books: [...BookList, newBook]})
}

deleteBook = (BookId) => {
    const Book = this.state.Books.find((Book) => Book.id === BookId);
    const BookList = this.state.Books.filter(Book => Book.id !== BookId);
    const newBook = {
        id:Book.id,
        name:Book.name,
        image:Book.image,
        page:Book.page,
        isComplete:Book.isComplete,
        isTrash:!Book.isTrash
    }
    this.setState({Books: [...BookList, newBook]}) 
};
    render(){
        return(
            <>
            <Container>
            <Router>
                <Navbar>
                    <NabarLi><NabarA><Link class="nbar" to="#" >Bookmark</Link></NabarA></NabarLi>
                    <NabarLi><NabarA><Link class="nbar" to="/MainPage" >MainPage</Link></NabarA></NabarLi>
                    <NabarLi><NabarA><Link class="nbar" to="/AddBook" >Thêm sách</Link></NabarA></NabarLi>
                    <NabarLi><NabarA><Link class="nbar" to="/SignUp" >SignUp</Link></NabarA></NabarLi>
                </Navbar>
                <Switch>
                    <Route path="/SignIn" component={SignIn}/>
                    <Route path="/MainPage">
                        <MainPage 
                            Books={this.state.Books}
                            setBook={this.setBook}
                            deleteBook={this.deleteBook}
                        />
                    </Route>
                    <Route path="/AddBook" component={AddBook}/>
                    <Route path="/SignUp" component={SignUp}/>
                    <Route path="/SignIn" component={SignIn}/>
                </Switch>
            </Router>
            </Container>
            </>
        )
    }
}
const Container = styled.div`
    width:80%;
    background-color:white;
    height:700px;
    margin:0 auto;
`;
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
