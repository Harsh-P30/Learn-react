import React from "react";

function Card(props){
    return(
        <>
            <input type="text"  onChange={(e)=>{
                props.setName(e.target.value);
            }}/>
            <p>{props.name}</p>
        </>
    )
}


export default Card;