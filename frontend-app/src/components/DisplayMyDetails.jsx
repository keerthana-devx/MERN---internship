import { useState } from "react";
const DisplayMyDetails=(props)=>{

    return(
        <>
        <h3>DisplayMyDetails</h3>

        <h4>
        Props Data:<br/> 
        
        Name : {props.Name}<br/> RollNo: {props.RollNo}<br/>Course: {props.Course}<br/>College : {props.College}
       {/* Name: {props.details.name} <br /><br />
       Name: {props.details.rollNo} */}
        </h4>
</>
        
    )

}
export default DisplayMyDetails;