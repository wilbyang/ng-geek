import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { FormControl } from '@angular/forms';
import {GeekColumnService} from "./geek-column.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private columnService: GeekColumnService) {

  }
  title = 'data_checker';
  ngOnInit(): void {
    this.columnService.fetchColumns();
  }
}
