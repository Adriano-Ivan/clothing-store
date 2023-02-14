import { useEffect, useState } from "react";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";


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
            console.log(email , password);
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
        <div className="sign-up-container">
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
        </div>
    );
}

export default SignUpForm;