import auth from "firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function authUserSignUp(email:string,password:string) {
   return createUserWithEmailAndPassword(auth, email, password);
}