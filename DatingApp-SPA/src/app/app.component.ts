import { tokenName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from './_models/user';
import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  jwt = new JwtHelperService();

  constructor(private authService: AuthService) {}
 // tslint:disable-next-line: typedef
  ngOnInit() {
    const token = localStorage.getItem('token');
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (token) {
      this.authService.decodedToken = this.jwt.decodeToken(token);
    }
    if (user){
      this.authService.curretnUser = user;
      this.authService.changeMemberPhoto(user.photoUrl);
    }
  }
}
