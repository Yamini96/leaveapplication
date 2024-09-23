import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {
  email: string = '';

  constructor(private authService: AuthService) {}

  onForgotPassword() {
    this.authService.forgotPassword(this.email).subscribe((res) => {
      // Handle success (show confirmation message)
    }, (err) => {
      // Handle error
    });
  }
}
