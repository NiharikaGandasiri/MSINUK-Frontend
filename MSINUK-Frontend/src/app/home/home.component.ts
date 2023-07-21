import { Component } from '@angular/core';
import { University } from '../university';
import { UniversityService } from './university.service';
import { UniversityDetails } from '../university-details';
import { User } from '../user';
import { Subscription } from 'rxjs';
import { UserService } from '../login/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  universities: UniversityDetails[];
  wishlist: UniversityDetails[];
  university: University = new University();
  lastVisited: UniversityDetails = new UniversityDetails();
  isSearchresults: boolean = false;
  user:User;
  subscription: Subscription;

  departments:String[] = ['medicine', 'Information Technology(IT)','automobile','Electonnics'];
  constructor(private service:UniversityService,private userService:UserService){ }

  ngOnInit():void{
    this.service.getUniversityList().subscribe(
      data=>{
        this.universities = data;
      });
      this.subscription = this.userService.currentUser.subscribe(user => {
        this.user = user;
        this.userProfile();
      });
  }
  ngSubmit():void{
      this.service.getUniversityByname(this.university).subscribe(
        data=>{
          this.universities=data;
          this.isSearchresults =true;
        });
  }
  userProfile() {
    var temp = this.universities;
    for(const university in temp) {
      if(temp[university].id==this.user.lastVisited){
        this.lastVisited = temp[university];
      }
      this.wishlist = temp.filter((s:UniversityDetails)=>{
        !this.user.wishlist.includes(s.id);
      });
    }
  }

}
