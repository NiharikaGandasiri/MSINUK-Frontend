import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PartTimeJobs } from '../part-time-jobs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartTimeJobsService {
  private getUrl = "http://localhost:8080/api/v1/getJobs";
  constructor(private httpClient: HttpClient) { }
  getJobs():Observable<PartTimeJobs[]> {
    return this.httpClient.get<PartTimeJobs[]>(this.getUrl);
  }
}
