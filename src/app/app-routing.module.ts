import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {GeekIndexComponent} from "./geek-index/geek-index.component";
import {GeekArticleComponent} from "./geek-article/geek-article.component";
import {ApsisDataComponent} from "./apsis-data/apsis-data.component";
import {GopherDailyComponent} from "./gopher-daily/gopher-daily.component";
import {ColumnListComponent} from "./column-list/column-list.component";
import {WebrtcHeadComponent} from "./webrtc-head/webrtc-head.component";
import {BookmarkListComponent} from "./bookmark-list/bookmark-list.component";


const routes: Routes = [
  {path: '', redirectTo: '/geek/475', pathMatch: 'full'},
  {path: 'geek/:cid', component: GeekIndexComponent},
  {path: 'article/:id', component: GeekArticleComponent},
  {path: 'apsis', component: ApsisDataComponent},
  {path: 'search/gopherdaily', component: GopherDailyComponent},
  {path: 'column/list', component: ColumnListComponent},
  {path: 'webrtc', component: WebrtcHeadComponent},
  {path: 'bookmarks', component: BookmarkListComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
