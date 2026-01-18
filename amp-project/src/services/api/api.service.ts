import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'to be implemented';

  constructor(private http: HttpClient) {}
    
  createArticle(article: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, article)
  }

  sendArticles(articleList: any[]): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, articleList);
  }

  getCalculatedPlacements(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}