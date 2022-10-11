import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:boolean=false;
  errorMessage:string="";
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.redirect();
  }
  login(credentials:{fullName:string,password:string}){
    this.authService.login(credentials.fullName,credentials.password).
    subscribe({
      next: (data) =>{
        this.redirect();
      },
      error:(error) =>{
        if(error.status==401){
          this.error=true;
          this.errorMessage="Login failed";
        }else{
          this.error=true;
          this.errorMessage="Unknown error";
        }
      }
    });
  }
  private redirect(){
    if(this.authService.isLoggedIn()){
      this.router.navigate(['/admin/bracket']);
    }
  }
}
