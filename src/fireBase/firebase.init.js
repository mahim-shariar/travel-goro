import { initializeApp } from "firebase/app";
import firebaseConfig from "./FireBase.config";

let Init =() =>{
    initializeApp(firebaseConfig);
}
export default Init;