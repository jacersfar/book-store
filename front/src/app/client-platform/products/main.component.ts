import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Book } from 'src/models/book.model';
import * as fromStore from '../../../store';
import { MatTableDataSource } from '@angular/material/table';
import { Client } from 'src/models/client.model';
import { OrderLine } from 'src/models/order-line.model';
import { SessionService } from 'src/services/session.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  booksPaginator: MatPaginator = null!;
  @ViewChild('booksPaginator', {static: false}) set booksPaginatorSer(element: MatPaginator) {
    if (element)
      this.booksPaginator = element;
  }
  booksPaginaotrDataSource:  MatTableDataSource<Book> = null!;
  booksObs$: Observable<any> = null!;

  loadingSub: Subscription = null!;
  booksSub: Subscription = null!;

  loadin$: Observable<boolean> = this.store.select(fromStore.SELECT_BOOK_LOADING);
  books$: Observable<Book[]> = this.store.select(fromStore.SELECT_BOOK_ALL);
  books: Book[] = null!;

  constructor(private store: Store, private cdr: ChangeDetectorRef, private sessionService: SessionService) {
    this.store.dispatch(fromStore.LoadBooks());
  }

  ngOnInit(): void {
    this.load();
  }

  private load() {
    this.loadBooks();
  }
  private loadBooks() {
    this.books$.subscribe(
      books => {
          this.books = books;
          this.loadBooksPaginator();
          console.log(this.books);
      }
    )
  }

  private loadBooksPaginator() {
    this.cdr.detectChanges();
    this.booksPaginaotrDataSource = new MatTableDataSource<Book>(this.books);
    this.booksPaginaotrDataSource.paginator = this.booksPaginator;
    this.booksObs$ = this.booksPaginaotrDataSource.connect();
  }

  public addToBasket(book: Book) {
    let user: Client = JSON.parse(localStorage.getItem('client')!);
    let exist: boolean = false;
    for (var it of user.cart.cartItems) {
      if (it.product.id === book.id) {
        it.quantity++;
        exist = true;
        break;
      }
    }
    if (!exist)
      user.cart.cartItems.push(new OrderLine(null!, null!, book, 1));
    this.sessionService.updateClientSession(user);
  }
}
