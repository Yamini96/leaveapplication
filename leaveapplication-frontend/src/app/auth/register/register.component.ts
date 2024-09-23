import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onRegister() {
    this.authService.register(this.email, this.password).subscribe((res) => {
      // Handle registration success (navigate to login)
    }, (err) => {
      // Handle registration error
    });
  }
}
