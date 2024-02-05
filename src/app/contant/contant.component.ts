import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contant',
  templateUrl: './contant.component.html',
  styleUrls: ['./contant.component.css']
})
export class ContantComponent {

   user:string= '';
   age:string= '';
   email:string= '';
   pass:string= '';

userName(value:string) {
  this.user = value;
}
  
userAge(value:string) {
  this.age = value;
}

userEmail(value:string) {
  this.email = value;
}

userPass(value:string) {
  this.pass = value;
}
}
