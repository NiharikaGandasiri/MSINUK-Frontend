import { Component } from '@angular/core';
import { PartTimeJobs } from '../part-time-jobs';
import { PartTimeJobsService } from './part-time-jobs.service';

@Component({
  selector: 'app-part-time-jobs',
  templateUrl: './part-time-jobs.component.html',
  styleUrls: ['./part-time-jobs.component.css']
})
export class PartTimeJobsComponent {
  jobs:PartTimeJobs[];
  filteredJobs:PartTimeJobs[];
  isRetrived:boolean=false;
  backupdata: PartTimeJobs[];
  portalUrl:string;
  isPortalOpen:boolean = false;
  portalUrls = {
    cvLibrary:'https://www.cv-library.co.uk/',
    simplyhired:'https://www.simplyhired.com/'
  }

  constructor(private service :PartTimeJobsService){}
  ngOnInit():void {
    this.service.getJobs().subscribe(
      data=>{
        this.jobs = data;
        this.backupdata = data;
        this.isRetrived=true;
      });
  }
  sendit(value:string){
    var tempMap=this.backupdata;
    for (const property in tempMap) {
      this.filteredJobs = tempMap.filter((s: PartTimeJobs) => s.location.toLowerCase().includes(value.toLowerCase()));
    }
    this.jobs = this.filteredJobs;
  }
  getPortal(name:string) {
    this.isPortalOpen=true;
    switch(name){
      case 'cvLibrary':{
        this.portalUrl=this.portalUrls.cvLibrary;
        break;
      }
      case 'simplyhired':{
        this.portalUrl=this.portalUrls.simplyhired;
        break;
      }
    }
    var ele = document.getElementById("portal");
    ele!=null?ele.setAttribute("src",this.portalUrl):console.log("element not exist");
  }
}
