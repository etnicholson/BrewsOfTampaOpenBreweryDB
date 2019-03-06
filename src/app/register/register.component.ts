import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Brewery } from '../_models/brewery';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  baseUrl = environment.apiUrl + 'brewery/';
  selectedFile: File;
  error: string;
  brewery: Brewery;
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  addBrewery(form: NgForm) {

    const fd = new FormData();


    fd.append('file', this.selectedFile, this.selectedFile.name);
    fd.append('data', JSON.stringify(form.value));

    this.http.post(this.baseUrl, fd).subscribe((res) => {
        }, error => console.log(this.error = error.error),  () =>     this.router.navigate(['/']));



  }

  onFileChange(event) {


    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);

  }



}
