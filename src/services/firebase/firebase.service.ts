import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment'
import { getAuth, signOut ,createUserWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  firebaseApp: any
  constructor() { }
  initFirebase() {
    if (!this.firebaseApp) {
      this.firebaseApp = initializeApp(environment.firebaseConfig);
      console.log(this.firebaseApp);
    }
  }

  createUser(userId: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userId, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }
  signOut(){
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("signedOut")
    }).catch((error) => {
      // An error happened.
    });
  }
}
