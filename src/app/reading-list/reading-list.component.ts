import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { ReadingList } from './reading-list.service';

@Component({
  selector: 'app-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.css']
})
export class ReadingListComponent implements OnInit {

  readingList: Book[];

  constructor(private readingListService: ReadingList) { }

  ngOnInit() {
    this.readingList = this.readingListService.getReadingList();
  }

}
