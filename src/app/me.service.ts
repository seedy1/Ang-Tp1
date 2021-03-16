import { Injectable } from '@angular/core';
import { Auth$LoginParams } from '@backend/routes/auth/post.login.interfaces';
import User from '@backend/models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// http://backend.thomas-veillard.fr/docs/
// operator@cleaning.com  customer employee

@Injectable({
  providedIn: 'root'
})
export class MeService {

  constructor(private http: HttpClient) { }
  // logout: () => Promise<void>;
  
  private me: User | null | undefined;

  // resolve!: () => Promise<User | null>;

  async resolve(){

    if (typeof(this.me) !== 'undefined'){
      return this.me; 
    }

    try {
    
      this.me = await this.http.get('/api/users/me').toPromise() as User;
      // this.me = await this.http.get('https://backend.thomas-veillard.fr/api/users/me', {withCredentials: true}).toPromise() as User;
    } catch (err) {
      if (err instanceof HttpErrorResponse){
        console.log("http error");
        
        if(err.status === 403){
          this.me = null;
          console.log("403 error");

        }
      }
      else throw err;
    }

    return this.me;
  }
  

  async login(credentials: Auth$LoginParams){
    await this.http.post('/auth/login', credentials).toPromise();
    // await this.http.post('https://backend.thomas-veillard.fr/auth/login', credentials).toPromise();
    this.me = undefined;
  };
  
  /**
   * Throws HttpErrorResponse in case of failure.
   * Returns Promise<void> if success.
   */
  async logout () {
    await this.http.delete('/auth/logout').toPromise();
    // await this.http.delete('https://backend.thomas-veillard.fr/auth/logout').toPromise();
    this.me = undefined; // reset cache
  }


}




// interface IMe {
//   me: User

//   /**
//    * On first call, retrieve the current user identity on /api/users/me.
//    * On following calls, use a cached reference (this.me).
//    * Returns Promise<User> if logged.
//    * Returns Promise<null> otherwise.
//    */
//   resolve: () => Promise<User | null>

//   /**
//    * Sends credentials against /auth/login.
//    * Throws HttpErrorResponse in case of failure.
//    * Returns Promise<void> if success.
//    */
//   login: (credentials: Auth$LoginParams) => Promise<void>

//   /**
//    * Sends credentials against /auth/logout.
//    * Throws HttpErrorResponse in case of failure.
//    * Returns Promise<void> if success.
//    */
//   logout: () => Promise<void>
// }