import React, { useEffect, useState } from 'react'
import PersonForm from '../components/PersonForm';
import PersonList from '../components/PersonList';
import axios from 'axios';

const Main = (props) => {
    //const [people, setPeople] = useState([]);
    //const [loaded, setLoaded] = useState(false);
    //
    //useEffect(()=>{
    //    axios.get('http://localhost:8000/api/people')
    //        .then(res=>{
    //            console.log(res.data);
    //            setPeople(res.data);
    //            setLoaded(true);
    //        })
    //        .catch(err => console.error(err));
    //},[]);
    
    return (
        <div>
           <PersonForm/>
           <hr/>
           <PersonList/>
        </div>
    )
}
    
export default Main;

