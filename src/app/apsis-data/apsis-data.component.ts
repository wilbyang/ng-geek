import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-apsis-data',
  templateUrl: './apsis-data.component.html',
  styleUrls: ['./apsis-data.component.css']
})
export class ApsisDataComponent implements OnInit {
  title = 'data_checker';
  apiUrl = 'https://api.github.com/users/mattlewis92/repos';
  link: any = {};
  activity: any = {};
  tpl: any = {};

  linkId = new FormControl('');
  activityId = new FormControl('');
  accountId = new FormControl('team-email-new');
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



  getActivity(accountId: string, activityId: string) {
    this.http.get<any>(`http://localhost:8080/activity?id=${activityId}&env=stage&account=${accountId}`).subscribe(data => {

      this.activity = {activity:data};
    }, error => {
      console.log(error);
    });
  }
  getLink(linkId: string) {
    this.http.get<any>(`http://localhost:8080/link?id=${linkId}&env=stage`).subscribe(data => {
      this.link = {link:data};
    });
  }

  getTpl(accountId: string, activityId: string) {
    this.http.get<any>(`http://localhost:8080/tpl?id=${activityId}&env=stage&account=${accountId}`).subscribe(data => {

      this.tpl = {tpl:data};
    }, error => {
      console.log(error);
    });
  }
}
