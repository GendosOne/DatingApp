import { HttpClient } from '@angular/common/http';
import { tokenName } from '@angular/compiler';
import {BehaviorSubject} from 'rxjs';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  curretnUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();
  constructor(private http: HttpClient) {}


  changeMemberPhoto(photoUrl: string){
    this.photoUrl.next(photoUrl);
  }
  // tslint:disable-next-line: typedef
  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          localStorage.setItem('user', JSON.stringify(user.user));
          this.decodedToken = this.jwtHelper.decodeToken(user.token);
          this.curretnUser = user.user;
          this.changeMemberPhoto(this.curretnUser.photoUrl);
        }
      })
    );
  }

  // tslint:disable-next-line: typedef
  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

 // tslint:disable-next-line: typedef
  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
