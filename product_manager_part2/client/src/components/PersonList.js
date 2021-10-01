import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {
    Link,
    useHistory
  } from "react-router-dom";
    
const PersonList = () => {
    const [people, setPeople] = useState([]);
    const history = useHistory();
    //const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/people')
            .then(res=>{
                console.log(res.data);
                setPeople(res.data.allPeople);
                //setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <h1>All Products</h1>
            {people.map( (person, i) =>
                <p key={i}><Link to ={`/people/${person._id}`}>{person.title}</Link></p>
            )}
        </div>
    )
}
    
export default PersonList;

