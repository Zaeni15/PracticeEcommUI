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

  // username: String;
  // rememberChecked: boolean = false;

  constructor(private loginSearchService: LoginSearchService) { }

  ngOnInit() {
    this.loginSearchService.getLoginSearchData().subscribe(userSearch => this.userSearch = userSearch
    );
    // console.log(this.userSearch.rememberChecked, '*****In Init');    
  }

  ngOnChanges() {
    // console.log(this.userSearch.rememberChecked, '***********');
  }

  userDetails(data: String, event: any) {

    // console.log(data,'****data');
    // console.log(event.target.value,'*****value');


    switch (data) {
      case "username":
        this.userSearch.username = event.target.value;
        // console.log(event.target.value);
        break;
      case "password":
        this.userSearch.password = event.target.value;
        break;
      default:
        console.log('Invalid entry');
    }
    // console.log(this.userSearch.rememberChecked, 'in toggle');
    // console.log(this.userSearch.username);
  }
  toggleBox(event: any) {
    console.log(event.target.checked);
    this.userSearch.rememberChecked = event.target.checked;
  }
  submitLogin(userSearch: LoginSearch) {
    console.log(userSearch);
    this.saveUserSearchEvent.emit(userSearch);


  }

}
