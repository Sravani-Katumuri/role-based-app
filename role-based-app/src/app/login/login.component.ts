import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    if (!this.username || !this.password) {
      alert('Username and password are required');
      return;
    }

    if (this.password.length < 3) {
      alert('Password must be at least 3 characters');
      return;
    }

    this.auth.login(this.username, this.password).subscribe((users) => {
      if (users.length === 0) {
    alert('Invalid Credentials');
    return;
  }


      if (this.auth.isAdmin()) this.router.navigate(['/admin']);
      else this.router.navigate(['/user']);
    });
  }


}
