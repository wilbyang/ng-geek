import {Component, OnInit} from '@angular/core';
import {GeekColumnService} from "../geek-column.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-column-list',
  templateUrl: './column-list.component.html',
  styleUrls: ['./column-list.component.css']
})
export class ColumnListComponent implements OnInit {

  constructor(
    private columnService: GeekColumnService,
    private httpClient: HttpClient

  ) {
  }

  columns: Column[] = [];
  ngOnInit(): void {

    this.httpClient.get<ColumnInfoAsStr[]>("http://localhost:3000/columns-intro")
      .subscribe(columns => {
        this.columns = columns.map(col => {
          return {
            column_id: col.column_id,
            info: JSON.parse(col.info) as ColumnInfo,
            articles: []
          }
        });
      });
    /*this.columnService.columns.subscribe(
      columns => {
        this.columns = columns;
      }
    );*/
  }

}
