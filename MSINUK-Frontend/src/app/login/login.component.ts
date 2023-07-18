import { Component } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserService } from './user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  remember_me:boolean=false;
  userpass:string;
  username:string;
  user: User = new User();
  isCheked:boolean= false;

  constructor(private route:ActivatedRoute,private service :UserService){}

  ngOnInit(){
    
  }
  LogIn(){
    this.service.checkUser(this.username,this.userpass).subscribe((data:any)=>
    {
      console.log(data);
    })
  }
  addUser(){
    console.log(this.user);
      this.service.addUser(this.user).subscribe((data:any)=>{
        console.log(data);
      });
  }
  signin(){
    var element = document.getElementById("signin");
    element!.classList.toggle("active");
    var element2 = document.getElementById("signup");
    element2!.classList.toggle("active");
  }
  signup(){
    var element = document.getElementById("signup");
    element!.classList.toggle("active");
    var element2 = document.getElementById("signin");
    element2!.classList.toggle("active");
  }
}
