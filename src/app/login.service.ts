import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


	url = 'http://localhost:3000/login';
  	constructor(private http: HttpClient) { }

loginCheck(username,password)
            	{
            		//console.log(email);
          	  	const obj={
          	  				username:username,
          	  				password:password
          	  			  };
          	  			return 1;
             		 //return this.http.post(`${this.uri}/check`);

                  //this.http.get(`${this.uri}/check`, obj)
                  //.subscribe(res => console.log(res.result));
            	}
}
