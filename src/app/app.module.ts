import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {NgxJsonViewerModule} from "ngx-json-viewer";
import {ReactiveFormsModule} from "@angular/forms";
import { GeekArticleComponent } from './geek-article/geek-article.component';
import { ApsisDataComponent } from './apsis-data/apsis-data.component';
import { GeekIndexComponent } from './geek-index/geek-index.component';
import { AppRoutingModule } from './app-routing.module';
import { GopherDailyComponent } from './gopher-daily/gopher-daily.component';
import { ColumnListComponent } from './column-list/column-list.component';
import { WebrtcHeadComponent } from './webrtc-head/webrtc-head.component';

@NgModule({
  declarations: [
    AppComponent,
    GeekArticleComponent,
    ApsisDataComponent,
    GeekIndexComponent,
    GopherDailyComponent,
    ColumnListComponent,
    WebrtcHeadComponent
  ],
  imports: [

    BrowserModule,
    HttpClientModule,
    NgxJsonViewerModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
