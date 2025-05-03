import React from "react";

function Cards({productName,aboutFlower,styles}){
    return(
        <div className={` shadow-xl/30 h-80 w-70 flex flex-col gap-2  justify-end p-5 rounded-xl`}>
            <div className={`${styles} shadow-xl/30 bg-center bg-cover w-full h-full bg-red-600 rounded-lg`}></div>
            <h1 className="text-2xl font-semibold ">{productName}</h1>
            <h5 className=""> {aboutFlower}</h5>
        </div>
    )
}

export default Cards;