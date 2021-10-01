import axios from 'axios';
import React from 'react';
import {useEffect, useState} from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Display = (props) => {

  const [skywalker, setSkywalker] = useState([]);
  const {varName, num} = useParams();
  

  const h = useHistory();

  useEffect(() => {
    axiosSkywalker()
  }, [num])

  const axiosSkywalker = () => {
    axios.get("https://swapi.dev/api/"+varName+"/"+num)
    .then(res => {
      console.log(res.data)
      setSkywalker(res.data)
    })
    .catch(err => console.log(err))
  }

  if(varName === "people"){
    return (
        <div className="App">
            <h1>{skywalker.name}</h1>
            <p>
                Height : {skywalker.height} cm
            </p>
            <p>
                Mass : {skywalker.mass} kg
            </p>
            <p>
                Hair Color : {skywalker.hair_color}
            </p>
            <p>
                Skin Color : {skywalker.skin_color}
            </p>
        </div>
      );

  }
  else if(varName === "planets") {
    return (
        <div className="App">
            <h1>{skywalker.name}</h1>
            <p>
                Climate : {skywalker.climate}
            </p>
            <p>
                Terrain : {skywalker.terrain}
            </p>
            <p>
                Surface Water : {skywalker.surface_water}
            </p>
            <p>
                Population : {skywalker.population}
            </p>
        </div>
      );
  }
}

export default Display;