import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { faBeer } from '@fortawesome/free-solid-svg-icons';
import { environment } from 'src/environments/environment';
import { Brewery } from '../_models/brewery';
import { OpenDBService } from '../_services/openDB.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {


  lat = 27.965853;
  lng = -82.800103;
  breweries: Brewery[];
  faBeer = faBeer;
  icon;


  baseUrl = environment.apiUrl + 'brewery/list/';
  uploadFolder = environment.uploadFolder;
  constructor(private http: HttpClient, private openDB: OpenDBService) { }

  ngOnInit() {
     this.icon = {
      url: '../../assets/beer.svg',
      scaledSize: {
        height: 30,
        width: 20
      }
    };

     this.openDB.breweryChange.subscribe((res: Brewery[] ) => {
       this.breweries = res;
    });


  }



}
