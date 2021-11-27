import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'paginationtest';
  currPage = 1;
  currPageSize = 5;
  data = [
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
    {"a":"a"},
  ]


   syncPage(e:number) {
     console.log(e)
    this.currPage = e;
  }

  paginationSlice(pageNumber: number, pageSize: number) {
    if (this.data) {
      return this.data.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
    } else {
      return [];
    }
  }
}
