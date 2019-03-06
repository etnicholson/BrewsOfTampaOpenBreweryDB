import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Brewery } from '../_models/brewery';
import { map } from 'rxjs/operators';
import { resetCompiledComponents } from '@angular/core/src/render3/jit/module';
import { Observable, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpenDBService {



 breweries: Brewery[];
 cities: string[];
 tampa: Boolean;
 breweryChange = new Subject;
constructor(private http: HttpClient) {

  this.cities = ['Clearwater', 'Largo', 'Dunedin', 'Trinity', 'Saint Petersburg', 'Tarpon Springs'];
  this.getTampa();
}

  getBreweries() {


    this.cities.forEach(city => {
      this.http.get('https://api.openbrewerydb.org/breweries?by_city=' + city).subscribe((res: any ) => {
        this.breweries.push(...res); }, (error: any) => console.log(error), () => this.breweryChange.next(this.breweries)
      );
    });






  }

  getTampa() {


    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Tampa').subscribe((res: any ) => {
      this.breweries = res; }, (error: any) => console.log(error),
      () => this.getBreweries()
    );




  }

  /*
  getClearwater() {
    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Clearwater').subscribe((res: any ) => {
      this.breweries.push(...res); }, (error: any) => console.log(error),
      () =>  this.getDunedin()
    );

  }

  getDunedin() {
    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Dunedin').subscribe((res: any ) => {
      this.breweries.push(...res); }, (error: any) => console.log(error),
      () =>  this.getPalmHarbor()
    );

  }

  getPalmHarbor() {
    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Palm Harbor').subscribe((res: any ) => {
      this.breweries.push(...res); }, (error: any) => console.log(error),
      () =>  this.getTrinity()
    );

  }



  getTrinity() {
    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Trinity').subscribe((res: any ) => {
      this.breweries.push(...res); }, (error: any) => console.log(error),
      () =>  this.getLargo()
    );

  }

  getLargo() {
    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Largo').subscribe((res: any ) => {
      this.breweries.push(...res); }, (error: any) => console.log(error),
      () =>  this.getTarpon()
    );

  }


  getTarpon() {
    this.http.get('https://api.openbrewerydb.org/breweries?by_city=Tarpon Springs').subscribe((res: any ) => {
      this.breweries.push(...res); }, (error: any) => console.log(error),
      () =>  this.breweryChange.next(this.breweries)
    );

  }
  */
}
