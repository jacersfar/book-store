import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Author } from 'src/models/author.model';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(private http: HttpClient) { }
  public find(): Observable<Author[]> {
    return this.http.get<Author[]>(`${environment.REST_API_URI}/author/find`);
  }
  public add(author: Author): Observable<Author> {
    return this.http.post<Author>(`${environment.REST_API_URI}/author/add`, author);
  }
  public update(author: Author): Observable<Author> {
    return this.http.put<Author>(`${environment.REST_API_URI}/author/update`, author);
  }
  public delete(author: Author): Observable<Author> {
    return this.http.post<Author>(`${environment.REST_API_URI}/author/delete`,author);
  }
  public findById(id: string): Observable<Author> {
    return this.http.get<Author>(`${environment.REST_API_URI}/author/find/${id}`);
  }
}
