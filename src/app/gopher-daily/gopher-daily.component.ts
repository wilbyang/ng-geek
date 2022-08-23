import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {FormControl} from "@angular/forms";
import {catchError, combineLatest, debounceTime, distinctUntilChanged, filter, of, retry, switchMap} from "rxjs";

interface LineLink {
  title: string;
  link: string;
}

@Component({
  selector: 'app-gopher-daily',
  templateUrl: './gopher-daily.component.html',
  styleUrls: ['./gopher-daily.component.css']
})
export class GopherDailyComponent implements OnInit {
  keyword = new FormControl('')

  constructor(private http: HttpClient, private router: ActivatedRoute) {
  }

  regex = new RegExp(/^.*[md|txt]:\d*\.(.*?)\s*-\s*(http.*)$/);
  lineLinks: LineLink[] = [];

  ngOnInit(): void {


    this.keyword.valueChanges.pipe(
      debounceTime(500),
      filter(keyword => keyword!.length > 3),
      distinctUntilChanged(),
      switchMap(keyword =>
        this.http.get<string[]>(`http://localhost:3000/search/gopherdaily/${keyword}`)
          .pipe(
            catchError(error => of(["error"])),
          )
      ),
    ).subscribe(data => {

      this.lineLinks = data.map(line => {
          let lineLink: LineLink = {title: line, link: "null link"};
          let matches = line.match(this.regex);
          if (matches) {
            return {title: matches[1], link: matches[2]} as LineLink;
          }
          return lineLink;
        }
      );
    });
  }

}
