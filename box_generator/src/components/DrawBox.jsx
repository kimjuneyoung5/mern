const DrawBox = (props) => {


    return(
        <div>
            {JSON.stringify(props.newColor)};
            {props.newColor.map((item, i) => 
                <p style={{
                    backgroundColor: item.color,
                    width: item.width + "px",
                    height: item.height +"px"
                }}></p>
            )}
        </div>
    );
}



export default DrawBox