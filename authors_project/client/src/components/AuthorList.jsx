import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
    Link,
    useHistory
  } from "react-router-dom";

const AuthorList = () => {
    const [authors, setAuthors] = useState([]);

    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId));
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors')
            .then(res=>{
                console.log(res.data);
                setAuthors(res.data.allAuthorsArray);
            })
            .catch(err => console.log(err));
    },[]);

    const deleteAuthor = (authorId) => {
        axios.delete('http://localhost:8000/api/authors/delete/' + authorId)
            .then(res => {
                removeFromDom(authorId)
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions available</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map ( (author, i) => 
                        <tr>
                            <td>{author.name}</td>
                            <td><button><Link to={`/authors/edit/${author._id}`}>Edit</Link></button> 
                            | | 
                            <button onClick = {(e)=> {deleteAuthor(author._id)}}>Delete</button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default AuthorList;