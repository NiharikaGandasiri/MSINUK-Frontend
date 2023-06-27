import { Component } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { UniversityDetailsService } from './university-details.service';
import { UniversityDetails } from './university-details';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent {
    id: string;
    universityDetails: any;
    constructor(private route:ActivatedRoute,private service :UniversityDetailsService){}

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id');
      this.id = id!=null?id:"";
        if(this.id!=null && this.id!=""){
            this.service.getUniversityById(this.id).subscribe(
              data=>{
                this.universityDetails = data;
               console.log(this.universityDetails);
              });
        }
    }
}
