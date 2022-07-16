import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  nameChanged(nameModel:any){
    console.log(nameModel)
  }
  onClickSubmit(data:any){
    console.log(data)
  }

}
