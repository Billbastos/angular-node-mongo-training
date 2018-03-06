import { ErrorService } from './../errors/error.service';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: Http, private errorService: ErrorService) {}

  signup(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('https://gui-angular2-udemy.herokuapp.com/user', body, {headers: headers})
    // return this.http.post('http://guiangula2udemy-env.us-east-2.elasticbeanstalk.com/user', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error);
      });
  }

  signin(user: User) {
    const body = JSON.stringify(user);
    const headers = new Headers({'Content-Type': 'application/json'})
    return this.http.post('https://gui-angular2-udemy.herokuapp.com/user/signin', body, {headers: headers})
    // return this.http.post('http://guiangula2udemy-env.us-east-2.elasticbeanstalk.com/user/signin', body, {headers: headers})
      .map((response: Response) => response.json())
      .catch((error: Response) => {
        this.errorService.handleError(error.json());
        return Observable.throw(error);
      });
  }

  logout() {
    localStorage.clear();
  }

  isLoggedIn() {
    return localStorage.getItem('token') !== null;
  }
  
}