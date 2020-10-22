import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginSearch } from 'src/app/models/login/userLogin.model';
import { LoginSearchService } from '../../services/login-search.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userSearch: Observable<LoginSearch>
  constructor(private loginSearchService: LoginSearchService) { }

  ngOnInit() {
    // console.log('in login');
    this.userSearch = this.loginSearchService.getLoginSearchData();
    
  }

  saveUserSearch(userSearch: LoginSearch) {
    this.loginSearchService.saveUserSearch(userSearch)
  }

}
