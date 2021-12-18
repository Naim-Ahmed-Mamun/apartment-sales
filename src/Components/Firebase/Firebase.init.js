import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseInitialize = () => {
   return initializeApp(firebaseConfig);
}
export default firebaseInitialize;