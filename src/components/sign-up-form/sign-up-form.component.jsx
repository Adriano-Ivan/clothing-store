import {  useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer } from "./sign-up-form.styles.jsx";


const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword:""
};

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const {displayName, email, password, confirmPassword} =formFields;

    const cleanFields = () => {
        setFormFields(
            {
                displayName: "", email: "", 
                password:"", confirmPassword:""
            }
        )
    }

    const handleChange = (event) => {
        const {name,value} = event.target;
       
        setFormFields(
            {...formFields, [name]: value}
        );
    }

    const handleSubmit = async (event) =>{
        event.preventDefault();

        if(password !== confirmPassword){
            alert("Confirme corretamente a senha");
            return;
        }

        if(displayName === ""){
            alert("O nome não foi definido!");
            return;
        }

        try {
            const {user} = await createAuthUserWithEmailAndPassword(displayName,email, password);
        
            if(!!user){
                alert("Usuário criado")
            }

            cleanFields();
        } catch(error){
            if(error.code === "auth/email-already-in-use"){
                alert("Email já está em uso");
            }
            console.log("houve um erro",error.message);
        }

    }

    return (
        <SignUpContainer>
            <h2>Don't have an account ?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
         
                 <FormInput
                 type="text"
                    label=" Display Name"
                    onChange={handleChange}
                    name="displayName"
                    value={displayName}
                    required
                 />

                <FormInput
                    required label="Email"
                    onChange={handleChange} name="email"
                    value={email} type="email"
                />

            
               <FormInput
                    required label="Password"
                    name="password" onChange={handleChange}
                    value={password} type="password"
               />

                
                <FormInput
                    required name="confirmPassword"
                    value={confirmPassword} onChange={handleChange}
                    type="password" label="Confirm Password"
                />

                <Button  type="submit">Sign Up</Button>
                
            </form>
        </SignUpContainer>
    );
}

export default SignUpForm;