import { Component } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { UniversityDetailsService } from './university-details.service';
import { UniversityDetails } from '../university-details';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent {
    id: string;
    universityDetails: UniversityDetails;
    image1:string;
    image2:string;
    image3:string;
    logo:string;
    map = new Map<String, String[]>();
    constructor(private route:ActivatedRoute,private service :UniversityDetailsService){}

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id');
      this.id = id!=null?id:"";
        if(this.id!=null && this.id!=""){
            this.service.getUniversityById(this.id).subscribe(
              data=>{
                this.universityDetails = data;
                this.image1=this.universityDetails.images[1];
                this.image2=this.universityDetails.images[2];
                this.image3=this.universityDetails.images[3];
                this.logo=this.universityDetails.images[0];
                this.map = this.universityDetails.courses;
               console.log(this.map);
              });
        }
    }
}
