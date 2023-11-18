import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgClass, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

/** Ngb Bootstrap imports. */
import {NgbCollapse, NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";

/** NgRx imports. */
import {Store} from "@ngrx/store";

/** Store imports */
import {AppState} from "../../../app.reducer";
import * as authSelectors from "../../../store/auth/auth.selectors";
import * as authActions from "../../../store/auth/auth.actions";

/** Core imports. */
import {ThemeService} from "../../../core";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    AsyncPipe,
    RouterLink,
    NgbCollapse,
    NgbDropdownModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Menu collapsed state.
  isMenuCollapsed: boolean = true;
  userEmail$: Observable<string> = new Observable<string>();

  /** ------------------------------------------------------------------------------ */

  constructor(
    /** NgRx store. */
    private store: Store<AppState>,
    /** Theme service. */
    public themeService: ThemeService) {
  }

  ngOnInit() {
    this.userEmail$ = this.store.select(authSelectors.selectUser).pipe(
      map(user => user ? user.email : 'somethingwrong@example.com'),
    )
  }

  /** ------------------------------------------------------------------------------ */

  onSwitchTheme(): void {
    this.themeService.switchTheme();
  }

  onLogout() {
    this.store.dispatch(authActions.logout());
  }
}
