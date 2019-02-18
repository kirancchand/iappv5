import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

	url = 'http://localhost:3000/register';
    constructor() { }
    registerUser(username,password,cpassword)
            	{
            		//console.log(email);
          	  	const obj={
          	  				username:username,
          	  				password:password,
          	  				cpassword:cpassword
          	  			  };
          	  			return obj;
             		 //return this.http.post(`${this.uri}/check`);

                  //this.http.get(`${this.uri}/check`, obj)
                  //.subscribe(res => console.log(res.result));
            	}
}
