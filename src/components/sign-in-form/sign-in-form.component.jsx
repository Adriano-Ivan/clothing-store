import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { createUserDocumentFromAuth, signInAuthUserWithEmailWihEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.scss";

const initialFormValues ={
    email: "",
    password: "",
};

const SignInForm = () => {
    const [formValues, setFormValues] = useState(initialFormValues);
    const {email, password} = formValues;

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormValues(
            {
                ...formValues, [name]: value
            }
        )
    }

    const logGoogleUser = async () =>{
        await signInWithGooglePopup ();

    }

    const signIn = async ( event)=> {
       event.preventDefault();

       await signInAuthUserWithEmailWihEmailAndPassword(email, password);
    }

    return (
        <form className="sign-in-container">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <FormInput
                    required label="Email"
                    name="email" onChange={handleChange}
                    value={email} type="email"
                />

            
            <FormInput
                required label="Password"
                name="password" onChange={handleChange}
                value={password} type="password"
            />

            <div className="buttons-wrapper">
                <Button type="submit" onClick={signIn}>Sign In</Button>
                <Button  
                    buttonType="google" 
                    type="button"
                    onClick={logGoogleUser}>Goggle Sign In</Button>
            </div>

        </form>
    );
}

export default SignInForm;