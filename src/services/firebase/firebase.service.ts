import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import {firebaseConfig} from 'src/environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
  initFirebase(){
    const app = initializeApp(firebaseConfig);
  }
}
