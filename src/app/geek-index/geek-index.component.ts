import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GeekColumnService} from "../geek-column.service";
import {combineLatest} from "rxjs";


@Component({
  selector: 'app-geek-index',
  templateUrl: './geek-index.component.html',
  styleUrls: ['./geek-index.component.css']
})
export class GeekIndexComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private columnService: GeekColumnService) {

  }


  column: Column | undefined;
  columns: Column[] | undefined;

  ngOnInit(): void {
    combineLatest([this.route.params, this.columnService.columns]).subscribe(
      ([params, columns]) => {
        this.columns = columns;
        this.column = columns.find(column => column.column_id === + params['cid']);

      });


  }

}
