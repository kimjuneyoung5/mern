import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';
import AuthorList from '../components/AuthorList';
import thisStyle from './Main.module.css';

const Main = (props) => {


    return (
        <div className={thisStyle.this}>
            <Link to="/authors/new">Add an author</Link>
            <p>We have quotes by: </p>
            <AuthorList />
        </div>
    )
}

export default Main;