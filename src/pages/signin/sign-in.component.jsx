import { signInWithGooglePopup,createUserDocumentFromAuth, signInWithGoogleRedirect,auth } from "../../utils/firebase/firebase.utils";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";


const SignIn = () => {

    const logGoogleUser = async () =>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth( user);
    }

    const logGoogleRedirectUser = async() =>{
        const {user} = signInWithGoogleRedirect();
        console.log(user);
        const userDocRef = await createUserDocumentFromAuth(user);
       
    }

    return (
        <div>
            <h1>  SignIn</h1>
            <button onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>

            <SignUpForm />
        </div>
    )
}

export default SignIn;