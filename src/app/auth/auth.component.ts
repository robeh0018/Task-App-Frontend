import {Component} from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

/** NgRx Imports */
import {Store} from "@ngrx/store";

/** Store imports */
import {AppState} from "../app.reducer";
import * as authActions from '../store/auth/auth.actions';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  isLogin: boolean = true;
  userForm: FormGroup;

  /**-------------------------------------------------------------------------------------------- */

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
  ) {
    this.userForm = this.initForm();
  }

  /**-------------------------------------------------------------------------------------------- */

  switchLoginAndRegisterMode($event: Event) {
    $event.preventDefault();
    this.isLogin = !this.isLogin;
    this.userForm = this.initForm();
  }

  /**-------------------------------------------------------------------------------------------- */

  onSubmit(): void {
    if (this.isLogin) {
      this.store.dispatch(authActions.login(this.userForm.value));
    } else {
      this.store.dispatch(authActions.register(this.userForm.value));
    }
  }

  /**-------------------------------------------------------------------------------------------- */

  private initForm(): FormGroup {
    if (this.isLogin) {
      // Login form structure.
      return this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    } else {
      // Register form structure.
      return this.fb.group({
        fullName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
    }
  }
}
