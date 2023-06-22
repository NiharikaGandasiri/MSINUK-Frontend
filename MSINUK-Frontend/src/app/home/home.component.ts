import { Component } from '@angular/core';
import { University } from '../university';
import { UniversityService } from './university.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  universities: University[];
  university: University = new University();

  departments:String[] = ['medicine', 'Information Technology(IT)','automobile','Electonnics'];
  constructor(private service:UniversityService){ }

  ngOnInit():void{
    this.service.getUniversityList().subscribe(
      data=>{
        this.universities = data;
      });
  }
  ngSubmit():void{
      this.service.getUniversityByname(this.university).subscribe(
        data=>{
          this.universities=data;
        });
  }


}
