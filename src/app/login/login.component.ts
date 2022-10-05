import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.redirect();
  }
  login(credentials:{fullName:string,password:string}){
    this.authService.login(credentials.fullName,credentials.password).
    subscribe(response=>{
      this.redirect();
    });
  }
  private redirect(){
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/admin/bracket']);
    }
  }
}
