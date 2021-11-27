import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() pageNumber: number=0;
  @Input() pageSize: number =0;
  @Input() totalRecord: number =0;
  totalPaginationSize: number =0;
  pageSwapping = 1;
  arrayIndex = [1, 2, 3];
  @Output() btnClick = new EventEmitter<number>();


  constructor() {

  }

  ngOnInit(): void {
   this.UpdateSize(this.totalRecord);
  }

  OnChanges(changes: SimpleChanges) {
    if (changes['totalRecord']) {
      this.UpdateSize(changes['totalRecord'].currentValue ? changes['totalRecord'].currentValue : null );
    }
  }

  click(index:number) {
    this.btnClick.emit(index);
  }

  previous(index:number) {
    if (this.pageNumber > 1 ) {
        this.pageSwapping = index;
        this.btnClick.emit(index);
    }
  }

  next(index:number) {
    if (this.pageNumber < this.totalPaginationSize ) {
      this.pageSwapping = index;
        this.btnClick.emit(index);
    }
  }

  UpdateSize(records: any) {
    if (records) {
        const pageIndex = (records / this.pageSize).toString().split('.');
        if (pageIndex[1]) {
          this.totalPaginationSize =
            parseInt(pageIndex[1], 10) < 5 ?  parseInt(pageIndex[0], 10) + 1  : Math.round(records / this.pageSize);
        } else {
          this.totalPaginationSize =  Math.round(records / this.pageSize);
        }

    }
  }

  addPages() {
      if (this.totalPaginationSize > this.arrayIndex.length) {
          this.pageSwapping += this.arrayIndex.length;
      }
  }

  // syncPage(e) {
  //   this.currPage = e;
  // }

  // paginationSlice(pageNumber: number, pageSize: number) {
  //   if (this.reviewData) {
  //     return this.reviewData.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);
  //   } else {
  //     return [];
  //   }
  // }



}
