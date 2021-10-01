import React, { useState } from  'react';

const BoxComponent = (props) => {
    const [color, setColor] = useState("");
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");

    const handleColor = (e) => {
        setColor(e.target.value);
    }
    const handleWidth = (e) => {
        setWidth(e.target.value);
    }
    const handleHeight = (e) => {
        setHeight(e.target.value);
    }

    const createBox = (e) => {
        console.log("step1");
        e.preventDefault();
        if(!width){
            setWidth(100);
        }
        if(!height){
            setHeight(100);
        }
        //width = width + "px";
        //height = height + "px";
        const newBox = {color, width, height};
        props.newBox(newBox);
        console.log(newBox);
    }


    return(
           <form onSubmit={ createBox }>
                <div>
                    <label>Color: </label> 
                    <input type="color" onChange={ handleColor } value={color}/>
                </div>
                <div>
                    <label>Width: </label> 
                    <input type="number" onChange={ handleWidth } value={width}/>
                </div>
                <div>
                    <label>Height: </label> 
                    <input type="number" onChange={ handleHeight } value={height}/>
                </div>
                <input type="submit" value="submit" />
            </form>
        );
}



export default BoxComponent