import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginCredentials } from '../models/login-credentials';
import { ApiConstants } from '../constants/api-constants';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  /**
   * @author Soul Merchant
   * 2022
   * login
   * once successful returns api token
   */  
  public login(params: LoginCredentials): Observable<any>{
    return this.http.post(ApiConstants.loginUrl + '/' , params);
  }

  /**
   * @author Soul Merchant
   * 2022
   * check if the user is Authenticated
   */
  public isAuthenticated() {
    return !!localStorage.getItem('merchant')   
  }

  /**
   * gettoken
   */
  public gettoken() {
    return localStorage.getItem('merchant')    
  }
}
