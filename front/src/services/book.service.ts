import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Book } from 'src/models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
  public find(): Observable<Book[]> {
    return this.http.get<Book[]>(`${environment.REST_API_URI}/product/all`);
  }
  public add(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.REST_API_URI}/product/book/add`, book);
  }
  public update(book: Book): Observable<Book> {
    return this.http.put<Book>(`${environment.REST_API_URI}/product/book/update`, book);
  }
  public delete(book: Book): Observable<Book> {
    return this.http.post<Book>(`${environment.REST_API_URI}/product/book/delete`, book)
  }
  public findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${environment.REST_API_URI}/product/get/${id}`);
  }
}
