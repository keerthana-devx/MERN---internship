import {Component} from "react";
class RegisterForm extends Component{
    render(){
        return(
           <form action="">
            <fieldset>
                <h1>Register</h1>

                 <label htmlfor="text">Name :</label>
                 <input type="name" placeholder="enter ur name" id=""/>
                 <br/>


                 <label htmlfor="password">Password :</label>
                 <input type="password" placeholder="enter ur password"/>
                 <br/>

            </fieldset>
          



           </form> 
        )
    }

}
export default RegisterForm;