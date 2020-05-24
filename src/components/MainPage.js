import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import ContentList from './ContentList';

const MainPage = (props) => {
    const BooksNotInTrash = props.Books.filter((Book) => !Book.isTrash);
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
                    setBook={props.setBook}
                    deleteBook={props.deleteBook} />
             </div>
             <div>
                <Banner  text = "Sách đã đọc"/> 
                <ContentList 
                    Books={BooksListComplete}
                    setBook = {props.setBook}
                    deleteBook={props.deleteBook}
                    />
              </div>
            </TitleName>
        </>
    )
}
export default MainPage;
const TitleName = styled.div `
    display:grid;
    grid-template-columns:5fr 5fr;
    grid-column-gap:15px;
`;

