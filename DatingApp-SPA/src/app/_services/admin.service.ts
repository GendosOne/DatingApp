import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
baseUrl = environment.apiUrl;
constructor( private http: HttpClient) { }

// tslint:disable-next-line: typedef
getUsersWithRoles(){
  return this.http.get(this.baseUrl + 'admin/usersWithRoles');
}

// tslint:disable-next-line: typedef
updateUserRoles(user: User, roles: {})
{
  return this.http.post(this.baseUrl + 'admin/editroles/' + user.userName, roles);
}
}
