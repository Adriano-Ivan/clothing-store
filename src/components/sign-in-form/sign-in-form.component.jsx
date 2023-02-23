import { useState } from "react";
import { signInAuthUserWithEmailWihEmailAndPassword, signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
import Button,{BUTTON_TYPES_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in-form.styles.jsx";
import { ButtonsWrapper, SignInContainer } from "./sign-in-form.styles.jsx";

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
        <SignInContainer>
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

            <ButtonsWrapper>
                <Button type="submit" onClick={signIn}>Sign In</Button>
                <Button  
                    buttonType={BUTTON_TYPES_CLASSES.google}
                    type="button"
                    onClick={logGoogleUser}>Google Sign In</Button>
            </ButtonsWrapper>

        </SignInContainer>
    );
}

export default SignInForm;