import React from "react";
// import RegisterForm from "./assets/RegisterForm";
import Nav from "./components/Nav";
import { Counter } from "./components/Counter";
import CounterFBC from "./components/CounterFBC";
import DisplayMyDetails from "./components/DisplayMyDetails";
const App=()=>{
// let details=["ravi","ehdjtf"];
let role="developer";
let Name="Keerthana";
let RollNo="5H3";
let Course="Mern Stack";
let College="BABA";


// let studentDetails={
//   name:"Keerthana",
//   rollNo:"5H3"
// }

  return(
     <p>
      <Nav/>
      
      {/* <Counter/>
      <CounterFBC fullDetails={details} role={role}/> */}
      {/* <DisplayMyDetails details={studentDetails}/> */}
      <DisplayMyDetails Name={Name} role={role} RollNo={RollNo} Course={Course} College={College}/>
            
    {/* <h1>React App using vite</h1>
     <RegisterForm/> */}
  </p>
  ); 
};
export default App;