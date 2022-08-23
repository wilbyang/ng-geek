import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, combineLatestWith, Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class GeekColumnService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  _columns: BehaviorSubject<Column[]> = new BehaviorSubject<Column[]>([]);

  get columns(): Observable<Column[]> {
    return this._columns.asObservable();
  }

  get completeColumns(): Observable<Column[]> {
    return this._columns.asObservable();
  }

  fetchColumns(): void {

    this.httpClient.get<Article[]>("http://localhost:3000/article/titles").pipe(
      combineLatestWith(this.httpClient.get<ColumnInfoAsStr[]>("http://localhost:3000/columns-intro"))
    ).subscribe(
      ([articles, columns]) => {
        let cls = articles.sort((a, b) => {
          if (a.column_id === b.column_id) {
            return a.article_id - b.article_id;
          }
          return a.column_id > b.column_id ? 1 : -1;
        }).reduce((acc, curr) => {
          const column = acc.find(col => col.column_id === curr.column_id);
          if (column) {
            column.articles.push(curr);
          } else {
            let col = columns.find(col => col.column_id === curr.column_id);
            acc.push({
              column_id: curr.column_id,
              articles: [curr],
              info: col ? JSON.parse(col!.info) as ColumnInfo : undefined
            });
          }
          return acc;
        }, new Array<Column>());
        let ret = columns.filter(col =>
          cls.find(c => c.column_id === col.column_id) === undefined
        ).map(col => {
          return {column_id: col.column_id, ...(JSON.parse(col.info) as ColumnInfo)};
        }).map(
          col => {
            return {column_id: col.column_id, title: col.title, type: col.type};
          }
        ).sort((a, b) => {
          return a.type > b.type ? 1 : -1;
        });
        console.table(ret);
        this._columns.next(cls);
      }
    )
  }
}
