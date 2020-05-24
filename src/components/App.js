import React from 'react';
import styled from 'styled-components'
import Menu from "./Menu";
import MainPage from "./MainPage";
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
}

    render(){
        return(
            <>
            <Container>
            <Menu />
            <MainPage 
            Books={this.state.Books}
            setBook={this.setBook}
            deleteBook={this.deleteBook}
            />
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
