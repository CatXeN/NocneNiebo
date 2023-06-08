import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { simulation } from 'src/app/shared/models/simulation.model';

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private baseUrl: string = 'http://localhost:5200/api/simulation/'

  constructor(private httpClient: HttpClient) { }

  public update(data: simulation) {
    return this.httpClient.post(this.baseUrl, data);
  }

  public getSimulation(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}

