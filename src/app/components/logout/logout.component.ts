import { Component , OnInit } from '@angular/core';
import { select , Store } from '@ngrx/store';
import { AppState } from '../../reducers/store';
import { LoggedOutAction } from '../../actions/auth.actions';
import { Observable } from 'rxjs';
import { selectAuthState } from '../../selector';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.pipe(select(selectAuthState, auth=> auth.loggedIn));
  }

  logout(){
    this.store.dispatch(new LoggedOutAction());
    this.router.navigateByUrl('home').catch(err=>{
      console.log('Error--',err);
    });
  }
}
