import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { LoginSearch } from '../../../models/login/userLogin.model';
import { LoginSearchService } from '../../services/login-search.service';

@Component({
  selector: 'app-right-login',
  templateUrl: './right-login.component.html',
  styleUrls: ['./right-login.component.css']
})
export class RightLoginComponent implements OnInit {

  @Input()
  userSearch: LoginSearch;

  @Output() saveUserSearchEvent = new EventEmitter<LoginSearch>();

  constructor(private loginSearchService: LoginSearchService) { }

  ngOnInit() {
    this.loginSearchService.getLoginSearchData().subscribe(userSearch => this.userSearch = userSearch
    );  
  }

  ngOnChanges() {
  }

  userDetails(data: String, event: any) {

    switch (data) {
      case "username":
        this.userSearch.username = event.target.value;
        break;
      case "password":
        this.userSearch.password = event.target.value;
        break;
      default:
        console.log('Invalid entry');
    }
  }
  toggleBox(event: any) {
    this.userSearch.rememberChecked = event.target.checked;
  }
  submitLogin(userSearch: LoginSearch) {
    this.saveUserSearchEvent.emit(userSearch);
  }

}
