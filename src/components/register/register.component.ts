import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/services/firebase/firebase.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private FirebaseService : FirebaseService) { }

  ngOnInit(): void {
  }
  nameChanged(nameModel:any){
    console.log(nameModel)
  }
  onClickSubmit(data:any){
    console.log(data)
  }

}
