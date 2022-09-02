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

  loading = false;
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
    this.loading = true;
    this.auth.login(this.form.value).subscribe({
      next: (data:any) => {

        this.auth.setUser(data.token, data.user);
        if(this.form.value.remember){
          this.auth.storeUser(data.token, data.user);
        }
  
        if(data.user.role==='student'){
          this.router.navigate(['student'])
          .then(() => {
            window.location.reload();
          });     
        }else if(data.user.role==='batchManager'){
          this.router.navigate(['backend/batchmanager'])
          .then(() => {
            window.location.reload();
          });     
        }else if(data.user.role==='admin'){
          this.router.navigate(['backend/admin'])
          .then(() => {
            window.location.reload();
          });    
        }else {
          this.loginError = "Couldn't identify user"
        }

        this.loading = false;
      },
      error: (err:any) => {
        console.log(err);
        this.loginError = err.status===500 ? 'Something went wrong at server': err.error.message||'Something went wrong.Please check your connection';
        this.loading= false;
      }
    })
  }
}
