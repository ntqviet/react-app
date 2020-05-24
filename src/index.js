import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

const Books = [
  {id:1, name:"book 1", image:"none", page:"7", isComplete:true, isTrash:false},
  {id:2, name:"book 2", image:"none", page:"7", isComplete:false, isTrash:false},
  {id:3, name:"book 3", image:"none", page:"7", isComplete:true, isTrash:false},
];

ReactDOM.render(
  <App Books={Books}/>,
  document.getElementById("root")
);