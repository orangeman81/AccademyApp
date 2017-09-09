import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feathers } from '../services/feathers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  messages: string[] = [];

  constructor(private feathers: Feathers, private router: Router) { }

  ngOnInit() { }

    login(loginForm: any ) {
    if (!loginForm.email || !loginForm.password) {
      this.messages.push('Incomplete credentials!');
      return;
    }

    // try to authenticate with feathers
    this.feathers.authenticate({
      strategy: 'local',
      email: loginForm.email,
      password: loginForm.password
    })
      // navigate to base URL on success
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch(err => {
        this.messages.unshift('Wrong credentials!');
      });
  }

  signup(loginForm: any) {
    this.feathers.service('users')
      .create({
        email: loginForm.email,
        password: loginForm.password,
        admin: loginForm.admin
      })
      .take(1)
      .toPromise()
      .then(() => this.messages.push('User created.'))
      .catch(err => this.messages.push('Could not create user!'))
    ;
  }

}
