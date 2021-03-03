import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Hero} from './hero';
import {Auth$LoginParams} from '@backend/routes/auth/post.login.interfaces';
import { MeService } from '../me.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';
  password: string = '';
  hide = true;
  error: string = '';
  

  constructor(private router: Router, private httpClient: HttpClient, private auth: MeService) { }

  ngOnInit(): void {
  }

  async submit(){

    try{
      const bodyParse: Auth$LoginParams = {email: this.email, password: this.password};
      // await this.httpClient.post('auth/login', bodyParse).toPromise();
      await this.auth.login(bodyParse)
      console.log(bodyParse);
      
      await this.router.navigateByUrl('/profile');

    }catch(err){
      if(err instanceof HttpErrorResponse){
        // this.error = err.error?.messages;
        console.log(err.error?.messages);
        
        window.alert(err.error?.messages);

      }
      // window.alert('error: ',this.error);
    }
  }

}
