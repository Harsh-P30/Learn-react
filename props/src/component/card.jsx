import React from "react"
import '../index.css'


// function Card(props){
//     name=(props.obj.name);
//     return(
//         <div className=" bg-blue-500 flex items-center justify-center rounded-lg mt-4 p-10 ${bg}">{name}</div>
//     )
// }


function Card({obj:{rollNo,name="manish",bg,color}}){
    return(
        <>
        <div className={`bg-blue-500 flex items-center justify-center rounded-lg mt-4 p-10 ${bg} ${color} bg-center bg-cover`}>{name}</div>
        <div className=" bg-blue-500 flex items-center justify-center rounded-lg mt-4 p-10 ">{rollNo}</div>
        
        </>
    )
}


// function Card({ obj: { name, rollNo, bg } }) {
//   return (
//     <div className="flex flex-col items-center">
//       <div className={` bg-blue-600 h-32 w-32 ${bg} flex items-center justify-center rounded-lg m-2`}>
//         <p className="text-white text-xl">{name}</p>
//       </div>
//       <p className="mt-2 text-lg">Roll No: {rollNo}</p>
//     </div>
//   );
// }

export default Card;