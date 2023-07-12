import { ViewChild, AfterViewInit, Component, ElementRef } from '@angular/core';
import { ActivatedRoute,} from '@angular/router';
import { UniversityDetailsService } from './university-details.service';
import { UniversityDetails } from '../university-details';

@Component({
  selector: 'app-university-details',
  templateUrl: './university-details.component.html',
  styleUrls: ['./university-details.component.css']
})
export class UniversityDetailsComponent implements AfterViewInit {
    id: string;
    universityDetails: UniversityDetails;
    hasUniversity:boolean = false
    courseMap = new Map<String, String[]>();
    title = 'angular-gmap';
    @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
    map: google.maps.Map;
    lat = 40.73061;
    lng = -73.935242;
    coordinates = new google.maps.LatLng(this.lat, this.lng);

    mapOptions: google.maps.MapOptions = {
     center: this.coordinates,
     zoom: 8
    };

    
    constructor(private route:ActivatedRoute,private service :UniversityDetailsService){}

    ngOnInit(): void{
      const id = this.route.snapshot.paramMap.get('id');
      this.id = id!=null?id:"";
        if(this.id!=null && this.id!=""){
            this.service.getUniversityById(this.id).subscribe(
              data=>{
                this.universityDetails = data;
                this.hasUniversity=true;
                this.courseMap = this.universityDetails.courses;
              });
        }  
    }
    collapse(event:any){
      console.log(event.target.nextSibling);
      const isexpanded = event.target.nextSibling.style.display=="block";
      if(isexpanded){
        event.target.nextSibling.style.display = "none";
      }
      else{
        this.expand(event);
      }
      
    }
    expand(event:any){
      var divsToHide = Array.from(document.getElementsByClassName('course') as HTMLCollectionOf<HTMLElement>);
      for(var i = 0; i < divsToHide.length; i++){
         divsToHide[i].style.display = "none";
      }
      event.target.nextSibling.style.display = event.target.nextSibling.style.display=="none"?"block":"none";
    }

    ngAfterViewInit() {
      this.mapInitializer();
    }

    mapInitializer() {
      console.log(this.gmap);
      this.map = new google.maps.Map(this.gmap.nativeElement, 
      this.mapOptions);
      const marker = new google.maps.Marker({
        position: this.coordinates,
        map: this.map,
      });
      marker.setMap(this.map);
    }
}
