import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Coordenadas } from '../interfaces/coordenadas';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  public getCoor(){
    return this.http.get<Coordenadas[]>('http://casaags:5000/map');
  }

}
