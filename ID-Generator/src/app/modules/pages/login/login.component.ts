import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  // form = new FormGroup({
  //   email: new FormControl(null, [Validators.required, Validators.email]),
  //   password: new FormControl(null, Validators.required)
  // });

  // onSubmit(){
  //   this.auth.login(this.form.value).subscribe({
  //     next: (data:any) => {
  //       this.auth.storeUserData(data.token, data.user);
  //       console.log(data);
  //       alert('success')   //change this..redirect to home     
  //     },
  //     error: (err:any) => {
  //       console.log(err);
  //       alert('failed')// change this
        
  //     }
  //   })
  // }
}
