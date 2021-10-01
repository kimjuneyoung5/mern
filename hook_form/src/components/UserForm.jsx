import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstname, setUserfirstname] = useState("");
    const [lastname, setUserlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmpassword, setconfirmPassword] = useState("");  
    const [titleError, setTitleError] = useState("");
    const [titleError2, setTitleError2] = useState("");
    const [titleError3, setTitleError3] = useState("");
    const [titleError4, setTitleError4] = useState("");
    const [titleError5, setTitleError5] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname, lastname, email, password, confirmpassword };
        console.log("Welcome", newUser);
    };
    
    const handleFirstName = (e) => {
        setUserfirstname(e.target.value);
        if(e.target.value.length < 2){
            setTitleError("First name must be at least 2 characters");
        }
        else{
            setTitleError("");
        }
    }
    const handleLastName = (e) => {
        setUserlastname(e.target.value);
        if(e.target.value.length < 2){
            setTitleError2("Last name must be at least 2 characters");
        }
        else{
            setTitleError2("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 2){
            setTitleError3("Email must be at least 2 characters");
        }
        else{
            setTitleError3("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 2){
            setTitleError4("Password must be at least 8 characters");
        }
        if(e.target.value !== confirmpassword){
            setTitleError5("Password must match");
        }
        else{
            setTitleError4("");
        }
    }
    return(
        <form onSubmit={ createUser }>
            <div>
                <label>Firstname: </label> 
                <input type="text" onChange={ handleFirstName } />
                {
                    titleError ?
                    <p style={{color:'red'}}>{ titleError }</p> :
                    ''
                }
            </div>
            <div>
                <label>Lastname: </label> 
                <input type="text" onChange={ handleLastName } />
                {
                    titleError2 ?
                    <p style={{color:'red'}}>{ titleError2 }</p> :
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmail } />
                {
                    titleError3 ?
                    <p style={{color:'red'}}>{ titleError3 }</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    titleError4 ?
                    <p style={{color:'red'}}>{ titleError4 }</p>:
                    ''
                }
                {
                    titleError5 ?
                    <p style={{color:'red'}}>{ titleError5 }</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="text" onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
        </form>
    );
};
    
export default UserForm;
