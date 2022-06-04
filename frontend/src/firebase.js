import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  
  apiKey: "AIzaSyAVcgmS1zzp4Up_STTU6rZ1ju1O4i0yRoU",
  authDomain: "research-project-tool.firebaseapp.com",
  projectId: "research-project-tool",
  storageBucket: "research-project-tool.appspot.com",
  messagingSenderId: "614295638545",
  appId: "1:614295638545:web:10593c74ab8c7bc41cd7b0",
  measurementId: "G-2HTKCRG8F0"

};

const app = initializeApp(firebaseConfig);
const storage = getStorage(
  app,
  "gs://research-project-tool.appspot.com"
);
export default storage;
