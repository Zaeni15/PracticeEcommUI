import { Injectable } from '@angular/core';
import { LoginSearch } from 'src/app/models/login/userLogin.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class LoginSearchService {
  
  status: any;

  constructor(private httpClient: HttpClient, private router: Router) { }

  getLoginSearchData(): Observable<any> {
    return this.httpClient.get("https://c96f7dab-7d6f-42c6-9e76-cfb1f3074260.mock.pstmn.io/v0/login")    
  }

  saveUserSearch(userLogin: LoginSearch) {
    console.log("***in post***");
    return this.httpClient.post("https://c96f7dab-7d6f-42c6-9e76-cfb1f3074260.mock.pstmn.io/v0/login", userLogin).pipe(map(data => {
      this.router.navigate(["dashboard"])}));;
  }
}
