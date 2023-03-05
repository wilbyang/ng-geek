import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-bookmark-list',
  templateUrl: './bookmark-list.component.html',
  styleUrls: ['./bookmark-list.component.css']
})
export class BookmarkListComponent implements OnInit {

  constructor(private httpClient: HttpClient) {
  }

  bookmarks: Bookmark[] = [];

  ngOnInit(): void {
    this.httpClient.get<BookmarkPage>("https://bookmarks-361112.ew.r.appspot.com/?offset=0", {
      headers: {
        "Authorization": "Basic YWRtaW46anRfeHhoaA==" // admin:jt_xxxh,
      }
    }).subscribe(
      data => {
        this.bookmarks = data.bookmarks;
      }
    );
  }

}
interface BookmarkPage {
  bookmarks: Bookmark[];
  nextpage: number;
  prevpage: number;
}

interface Bookmark {
  tags: string;
  content: string;
  url: string;
}
