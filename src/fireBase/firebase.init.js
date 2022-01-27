import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

let InitFirebase =() =>{
    initializeApp(firebaseConfig);
}
export default InitFirebase;