import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {shareReplay, tap} from 'rxjs/operators';
import * as moment from 'moment';

export interface IUserLogin {
  login: string;
  password: string;
}

export const EXPIRES_AT = 'expires_at';
export const ID_TOKEN = 'id_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  signIn(user: IUserLogin) {
    const { login, password } = user;

    return this.httpClient.post<IUserLogin>('/api/signin', {login, password})
      .pipe(
        tap(res => {this.setSession(res)}),
        shareReplay()
      );
  }
  setSession(authResult) {
    const {expiresIn, idToken} = authResult;
    const expiresAt = moment().add(expiresIn, 'second');

    localStorage.setItem(ID_TOKEN, idToken);
    localStorage.setItem(EXPIRES_AT, JSON.stringify(expiresAt.valueOf()));
  }
  logout() {
    localStorage.removeItem(ID_TOKEN);
    localStorage.removeItem(EXPIRES_AT);
  }
  public isLoggedIn() {
    return true;
  }
  public isAdmin() {
    return true && this.isLoggedIn();
  }
  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiration = localStorage.getItem(EXPIRES_AT);
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
}
