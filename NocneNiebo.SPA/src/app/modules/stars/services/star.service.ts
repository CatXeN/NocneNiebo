import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Star } from 'src/app/shared/models/star.model';

@Injectable({
  providedIn: 'root'
})
export class StarService {

  private baseUrl: string = 'http://localhost:5200/api/star/'

  constructor(private httpClient: HttpClient) { }

  public getStars(): Observable<Star[]> {
    return this.httpClient.get<Star[]>(this.baseUrl);
  }

  public getStar(id: string): Observable<Star> {
    return this.httpClient.get<Star>(this.baseUrl + id);
  }

  public addStar(data: any): Observable<Star> {
    return this.httpClient.post<Star>(this.baseUrl, data);
  }

  public deleteStar(id: string): Observable<Star> {
    return this.httpClient.delete<Star>(this.baseUrl + id);
  }

  public editStar(data: any): Observable<Star> {
    return this.httpClient.put<Star>(this.baseUrl, data);
  }
}
