import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-geek-article',
  templateUrl: './geek-article.component.html',
  styleUrls: ['./geek-article.component.css']
})

export class GeekArticleComponent implements OnInit, AfterViewInit {

  constructor(private httpClient: HttpClient, private route: ActivatedRoute) {

  }
  article?: Article;
  @ViewChild('content', {static: false}) contentDiv: ElementRef<HTMLDivElement> | undefined;
  ngAfterViewInit() {
    let number = this.route.snapshot.params['id'];
    if (number.endsWith("_en")) {
      this.fetchArticle(parseInt(number.substring(0, number.length - 3)), true);
      //this.fetchArticle(number, true);
    }
    this.fetchArticle(+number, false);
  }

  fetchArticle(articleId: number, english: boolean = false): void {
    let url = english ? `http://localhost:3000/en/article/${articleId}` : `http://localhost:3000/article/${articleId}`;
    this.httpClient.get<Article>(url).subscribe(article => {
      this.article = article;
      let content = article.content.replace(/src\="https:\/\/static001.geekbang.org\/resource\/image\/[a-z0-9]{2}\/[a-z0-9]{2}\/([a-z0-9]{8,}\.(png|jpg|jpeg|gif)).*?"/g, "src=\"http://geek_artilce_images.test/$1\"");
      this.contentDiv!.nativeElement.innerHTML = content;
      // this.contentDiv!.nativeElement.innerHTML = article.content;
      (window as any).highlightAll();
      (window as any).latex();
    });
  }

  ngOnInit(): void {



  }

}
