import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-home',
  standalone: true,
  imports: [],
  templateUrl: './user-home.component.html',
  styleUrl: './user-home.component.css'
})
export class UserHomeComponent {
user: any;
  constructor(public auth: AuthService) {}
  ngOnInit() {
    this.user = this.auth.getUser();
  }

}
