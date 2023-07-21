import { Component } from '@angular/core';
import { User } from '../user';
import { Router } from '@angular/router';
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
  loginResponse:any;
  isError:boolean =false;
  errorMessage:string;

  constructor(private service :UserService, private router:Router){}

  ngOnInit(){
    
  }
  LogIn(){
    this.service.checkUser(this.username,this.userpass).subscribe((data:any)=>
    {
      this.loginResponse = data;
      const user = data.user;
      console.log(user);
      if(this.loginResponse.status){
        this.service.changeUser(user);
        this.router.navigateByUrl("/");
      }
      else{
        this.isError=true;
        this.errorMessage = this.loginResponse.message;
      }
      
    })
  }
  addUser(){
    console.log(this.user);
      this.service.addUser(this.user).subscribe((data:any)=>{
        this.loginResponse = data;
        if(this.loginResponse.status){
          this.router.navigateByUrl("/login");
        }
        else{
          this.isError=true;
          this.errorMessage = this.loginResponse.message;
        }
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
