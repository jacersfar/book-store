import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from 'src/models/book.model';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent implements OnInit {

  @Input() book?: Book;
  @Output() addToBasket = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emit() {
    this.addToBasket.emit(this.book);
  }

}
