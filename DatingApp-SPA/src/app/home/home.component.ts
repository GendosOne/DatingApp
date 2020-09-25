import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  registerMode = false;

  constructor(private http: HttpClient) { }
// tslint:disable-next-line: typedef
ngOnInit() {
  }

// tslint:disable-next-line: typedef
  registerToggle(){
    this.registerMode = true;
  }


  cancelRegisterMode(registerMode: boolean){
    this.registerMode = registerMode;
  }
}
