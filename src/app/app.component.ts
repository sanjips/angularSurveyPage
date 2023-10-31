import { Component } from '@angular/core';

import { AccountService } from 'src/app/_services/account.service';
import { User } from 'src/app/_models/users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  user?: User | null;

  constructor(private accountService: AccountService) {
    debugger;
      this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
      this.accountService.logout();
  }
}

