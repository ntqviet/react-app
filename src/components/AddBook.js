import React, {Component} from 'react';
import "../index.css";
//import {FaPlus} from "react-icons/fa";
import styled from 'styled-components';


class AddBook extends Component{
    textname = React.createRef();
    textauthor = React.createRef();
    textyear = React.createRef();
    textpage = React.createRef();
    handleAddBook=()=>{
        if(this.textname.current.value !==""){
            this.props.addBook(this.textname.current.value);
            this.textname.current.value="";
        }
        if(this.textauthor.current.value !==""){
            this.props.addBook(this.textauthor.current.value);
            this.textauthor.current.value="";
        }
        if(this.textyear.current.value !==""){
            this.props.addBook(this.textyear.current.value);
            this.textyear.current.value="";
        }
        if(this.textpage.current.value !==""){
            this.props.addBook(this.textpage.current.value);
            this.textpage.current.value="";
        }
    }
    render(){
        return (
            <BoxAdd>
                <label>Tên sách: </label>
                <Add type="text" placeholder="Nhập tên sách" id="name" ref={this.textname}/>
                <label>Tác giả: </label>
                <Add type="text" placeholder="Nhập tên tác giả" id="author" ref={this.textauthor}/>
                <label>Năm xuất bản: </label>
                <Add type="text" placeholder="Nhập năm xuất bản" id="year" ref={this.textyear}/>
                <label>Tổng số trang: </label>
                <Add type="text" placeholder="Nhập số trang sách" id="page" ref={this.textpage}/>
                <BtnAdd type="sunbit" onClick={this.handleAddBook}>OK</BtnAdd>
                <BtnCancel>Cancel</BtnCancel>
            </BoxAdd>
        )
    }
}
export default AddBook;
const BoxAdd = styled.form`
    padding:10px;
`;
const Add = styled.input`
    display:block;
    width:100%;
    padding:.375rem .75rem;
    font-size:1rem;
    line-height:1.5;
    color:#495057;
    background-color:#fff;
    background-clip:padding-box;
    border:1px solid #ced4da;
    border-radius:.25rem;
    margin: 0 0 25px 0;
`;
const BtnAdd = styled.button`
    border-radius: 3px;
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    background-color: green;
    border-color: green;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    height:36px;
    width:100px;
    margin-top:25px;

    &:hover{
        background-color:#007bff;
    }
`;
const BtnCancel = styled.button`
    border-radius: 3px;
    padding: .25rem .5rem;
    font-size: .875rem;
    line-height: 1.5;
    color: #fff;
    background-color: red;
    border-color: red;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    height:36px;
    width:100px;
    margin-top:25px;
    margin-left:50px;

    &:hover{
        background-color:#007bff;
    }
`;