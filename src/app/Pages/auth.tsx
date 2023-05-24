import React from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "@/firebase/firebaseConfig";
import { Auth } from "firebase/auth";
const uiConfig = {
    //Redirect to / after sign in is successful. Alternatively you can provide a callback function
    signInSuccessUrl: "/",
    // We will display Github as auth providers
    signInOptions: [firebase.auth.GithubAuthProvider.PROVIDER_ID]
};

export default function SignInScreen() {
    return (
        <div style={{
            maxWidth: "320px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
        }}>
            <h1>Pineapple Login</h1>
            <p>Please sign-in:</p>
            <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
         </div>
    )
}