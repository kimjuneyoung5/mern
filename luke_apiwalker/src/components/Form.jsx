import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';

const Form = (props) => {
    const [name, setName] = useState("");
    const [num, setNum] = useState("");

    const history = useHistory();
    
    const sendSearch = (e) => {
        e.preventDefault();
        console.log(name)
        console.log(num)
        
        history.push(`/${name}/${num}`);
    }

    return (
        <fieldset>
            <form onSubmit = {sendSearch}>
                <label>Search for: </label>
                <select type="text" onChange={(e) => setName(e.target.value)} value={name}>
                    <option value="people">People</option>
                    <option value="planets">Planets</option>
                </select>
                <label>ID: </label>
                <input type="number" onChange={(e) => setNum(e.target.value)} value={num} />
                <input type="submit" value="Search"/>
            </form>
        </fieldset>
    );
}

export default Form