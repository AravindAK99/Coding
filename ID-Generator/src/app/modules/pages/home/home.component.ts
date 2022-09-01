import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  loginError:any;

  constructor(private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
    remember: new FormControl(false)

  });

  onSubmit(){
    this.auth.login(this.form.value).subscribe({
      next: (data:any) => {
        this.auth.setUser(data.token, data.user);
        if(this.form.value.remember){
          this.auth.storeUser(data.token, data.user);
        }
        this.router.navigate(['student']);     
      },
      error: (err:any) => {
        console.log(err);
        this.loginError = err.error.message||'something went wrong';
        
      }
    })
  }
}
