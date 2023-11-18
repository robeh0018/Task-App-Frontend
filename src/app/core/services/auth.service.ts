import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

/**Models imports */
import {IUser} from "../models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  /**-----------------------------Login----------------------------------------------------------*/
  login(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(
      'http://localhost:3000/auth/login',
      {email, password});
  }

  /**-------------------------Register------------------------------------------------------------*/
  register(fullName: string, email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(
      'http://localhost:3000/auth/register',
      {fullName, email, password});
  }
}
