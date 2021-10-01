import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Edit = (props) => {

    let history = useHistory();

    const { id } = useParams();

    const [name, setName] = useState("");
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res=>{
                console.log(res.data);
                setName(res.data.name);
            })
            .catch(err => console.log(err));
    },[id]);

    const updateAuthor = (e) => {
        e.preventDefault();
        
        axios.put("http://localhost:8000/api/authors/edit/" + id, {
            name
        })
            .then(updatedAuthor => {
                console.log(updatedAuthor)
                history.push("/authors")
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Link to="/authors">Home</Link>
            <p>Edit this author: </p>
            <form onSubmit={updateAuthor}>
                <p>Name: <br />
                    <input type = "text" value={name} onChange={e => setName(e.target.value)} />
                </p>
                <p>
                    <Link to="/authors">Cancel</Link>     
                    <input type="submit" />
                </p>
            </form>
        </div>
    )

}

export default Edit;