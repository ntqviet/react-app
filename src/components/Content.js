import React from 'react';
import styled from 'styled-components';
import {FaCheck, FaUndo, FaTrash, FaEdit} from 'react-icons/fa';

class Content extends React.Component {
    state={
        editTing: false,
        nameEdit: this.props.Book.name,
        authorEdit: this.props.Book.author,
        yearEdit: this.props.Book.year,
        pageEdit: this.props.Book.page,
    }
    checkBook = () => {
        this.props.setBook(this.props.Book.id);
    }
    deleteBook = () => {
        this.props.deleteBook(this.props.Book.id);
    }
    editBook = () => {
        this.setState({editTing:true});
    }
    changeEditName = () =>{
        this.setState({
            nameEdit: this.refs.textname.value
        })
    }
    changeEditAuthor = () =>{
        this.setState({
            authorEdit: this.refs.textauthor.value
        })
    }
    changeEditYear = () =>{
        this.setState({
            yearEdit: this.refs.textyear.value
        })
    }
    changeEditPage = () =>{
        this.setState({
            pageEdit: this.refs.textpage.value
        })
    }
    EditBook = () =>{
        this.setState({
            editTing:false,
            nameEdit: this.refs.textname.value,
            authorEdit: this.refs.textauthor.value,
            yearEdit: this.refs.textyear.value,
            pageEdit: this.refs.textpage.value
        })
    }
    onBlurEdit = () =>{
        this.EditBook();
    }
    onEnter = (event) =>{
        if(event.key === "Enter"){
            this.EditBook();
        }
    }
    render() {
        
    const ListBooks = this.props.Book;        
       
        return (
           <>
            <Item>
                {!this.state.editTing ? <ContentName>{this.state.nameEdit} Tên sách: {ListBooks.name}</ContentName>
                :
                <TextEdit ref='textname' 
                    value={this.state.nameEdit} 
                    onChange={this.changeEditName} 
                    onBlur={this.onBlurEdit} 
                    onKeyPress={this.onEnter}
                />
                }
                {!this.state.editTing ? <ContentName>{this.state.authorEdit} Tác giả: {ListBooks.author}</ContentName>
                :
                <TextEdit ref='textauthor' 
                    value={this.state.authorEdit} 
                    onChange={this.changeEditAuthor} 
                    onBlur={this.onBlurEdit} 
                    onKeyPress={this.onEnter}
                />
                }
                <Check onClick={this.editBook}>
                    <FaEdit />
                </Check>
                <Check onClick={this.checkBook}>
                    {this.props.primary ? <FaCheck /> : <FaUndo />}
                </Check>
                <Check warning onClick={this.deleteBook}>
                    <FaTrash />
                </Check>
            </Item>
            
            
        </>
        )
    }
}
export default Content;
const Item = styled.div `
    width:min(100%, 442px);
    height:min(100%, 100px);
    background-color:#ddd;
    padding:5px;
    line-height:7rem;
    margin-bottom:5px;
    display:grid;
    grid-template-columns: 4.5fr 4fr 0.5fr 0.5fr 0.5fr;
`;
const ContentName = styled.label ` 
    color:#000;
`;
const Check = styled.button`
    padding: 0 10px;
   font-size:25px;

   color: ${props => props.warning ? "red" : "#2EFE2E"}
`;
const TextEdit = styled.textarea`
width:100%;
`;