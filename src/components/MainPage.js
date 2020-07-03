import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import ContentList from './ContentList';
import detailBook from './detailBook';
import AddBook from './AddBook';
const axios = require('axios');
const Books = [
    // {id:1, name:"book 1", author:"Author 1", year:"2000", page:"7", isComplete:true, isTrash:false},
    // {id:2, name:"book 2", author:"Author 2", year:"2020", page:"7", isComplete:false, isTrash:false},
    // {id:3, name:"book 3", author:"Author 3", year:"2018", page:"7", isComplete:true, isTrash:false},
];

class MainPage extends React.Component{
    state = {
        Books: []
    }
    componentDidMount(){
        this.getData();
    }
    async getData(){
        
        let res = await axios.get("http://localhost:3003/qlbooks");
        console.log(res.data);
        this.setState({
            Books: [...res.data]
        })
        
    }

    addBook = (text) =>{
        const newBook = {
            id:this.state.Books.length + 1,
            name: text,
            author: text,
            page: text,
            year: text,
            isComplete: false,
            isTrash:false
        }
        this.setState({Books: [...this.state.Books, newBook]})
    }
    editBook = id => {
        var Book = this.state.Books.find(Book => Book.id === id);
        var BookList = this.state.Books.filter(Book => Book.id !== id);
        
    }

    setBook = id => {
        var Book = this.state.Books.find(Book => Book.id === id);
        var BookList = this.state.Books.filter(Book => Book.id !== id);
        var newBook = {
            id:Book.id,
            name:Book.name,
            author:Book.author,
            page:Book.page,
            year:Book.year,
            isComplete:!Book.isComplete,
            isTrash:Book.isTrash
        }
        this.setState({Books: [...BookList, newBook]})
    }
    
    deleteBook = id => {
        var Book = this.state.Books.find((Book) => Book.id === id);
        var BookList = this.state.Books.filter(Book => Book.id !== id);
        var newBook = {
            id:Book.id,
            name:Book.name,
            author:Book.author,
            page:Book.page,
            year:Book.year,
            isComplete:Book.isComplete,
            isTrash:!Book.isTrash
        }
        this.setState({Books: [...BookList, newBook]}) 
    };
    render(){
        const BooksNotInTrash = this.state.Books.filter(Book => !Book.isTrash);
        const BooksList = BooksNotInTrash.filter((Book) => !Book.isComplete);
        const BooksListComplete = BooksNotInTrash.filter((Book) => Book.isComplete);
        return (
            <>
                <TitleName>
                    <div> 
                    <Banner primary text = "Sách đang đọc"/>
                    <ContentList 
                        primary 
                        Books={BooksList} 
                        detailBook ={this.detailBook}
                        setBook={this.setBook}
                        deleteBook={this.deleteBook} />
                </div>
                <div>
                    <Banner  text = "Sách đã đọc"/> 
                    <ContentList 
                        Books={BooksListComplete}
                        detailBook={this.detailBook}
                        setBook = {this.setBook}
                        deleteBook={this.deleteBook}
                        />
                </div>
                </TitleName>
            </>
        )
    }
}
export default MainPage;
const TitleName = styled.div `
    display:grid;
    grid-template-columns:5fr 5fr;
    grid-column-gap:15px;
    margin: 5%;
`;

