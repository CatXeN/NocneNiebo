import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cons, Observable } from 'rxjs';
import { Constellation } from 'src/app/shared/models/constellation.model';

@Injectable({
  providedIn: 'root'
})
export class ConstellationService {
  private baseUrl: string = 'http://localhost:5200/api/constellation/'

  constructor(private httpClient: HttpClient) { }

  public getConstellations(): Observable<Constellation[]> {
    return this.httpClient.get<Constellation[]>(this.baseUrl);
  }

  public getConstellation(id: string): Observable<Constellation> {
    return this.httpClient.get<Constellation>(this.baseUrl + id);
  }

  public addConstellation(data: any): Observable<Constellation> {
    return this.httpClient.post<Constellation>(this.baseUrl, data);
  }

  public updateConstellation(data: any): Observable<Constellation> {
    return this.httpClient.put<Constellation>(this.baseUrl, data);
  }

  public deleteConstellation(data: string): Observable<string> {
    return this.httpClient.delete<string>(this.baseUrl + data)
  }
}
