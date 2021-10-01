import axios from 'axios';
import { useState } from 'react'
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Create = (props) => {

    let history = useHistory();

    const [name, setName] = useState("");
    const [dbErrors, setDBErrors] = useState([]);

    const createAuthor = (e) => {

        e.preventDefault();

        axios.post('http://localhost:8000/api/authors', {
            name
        })
            .then(res => {
                setName(res.data.name);
                history.push("/authors")
            })
            .catch(err => {
                console.log("inside CATCH >>>>> ");
                console.log(err.response.data);

                const {errors} = err.response.data;
                const messages = Object.keys(errors).map( error => errors[error].message);
                setDBErrors(messages);
            })
    }

    return (
        <div>
            <Link to="/authors">Home</Link>
            <p>Add a new author: </p>
            <form onSubmit={createAuthor}>
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

export default Create;