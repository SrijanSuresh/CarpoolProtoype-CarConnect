import {auth, provider} from "./firebase"
import { createUserWithEmailAndPassword,  /*sendEmailVerification, sendPasswordResetEmail,*/ signInWithPopup, /*updatePassword,*/ signInWithEmailAndPassword} from "firebase/auth"

export const doCreateUserWithEmailAndPassword = async (email,password) =>{
    return createUserWithEmailAndPassword(auth, email, password)
}

export const doSigninWithEmailAndPassWord = (email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
}

export const doSignInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(auth, provider);
        const userEmail = result.user.email;
        
        // Store email in localStorage
        localStorage.setItem("email", userEmail);

        return result;
    } catch (error) {
        console.error("Google Sign-in Error:", error.message);
        throw error; // Rethrow the error to handle it where this function is called
    }
};


export const doSignOut = () => {
    return auth.signOut();
}

// export const doPasswordReset = (email) =>{
//     return sendPasswordResetEmail(auth,email)
// }

// export const doPasswordChange = (password) => {
//     return updatePassword(auth.currentUser, password) 
// }

// export const doSendEmailVerification = () =>{
//     return sendEmailVerification(auth.currentUser, {
//         url: `${window.location.origin}/home`,
//     })
// }

