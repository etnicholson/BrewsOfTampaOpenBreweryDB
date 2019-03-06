import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewery } from '../_models/brewery';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenDBService {

 breweries: Brewery[];

constructor(private http: HttpClient) { }

  getBreweries() {
  return this.http.get('https://api.openbrewerydb.org/breweries?by_city=Tampa').pipe(
    map(res =>  res));

  }




}
