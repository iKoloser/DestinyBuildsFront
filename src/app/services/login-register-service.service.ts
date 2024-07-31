import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginRegisterServiceService {

  private urlApi = 'http://localhost:5194/api/account/login';  


  constructor() { }

  http = inject(HttpClient);

  login(credentials: { UserName: string; Password: string }): Observable<any> {
    console.log(credentials);
    return this.http.post(`${this.urlApi}`, credentials);
  }


}
