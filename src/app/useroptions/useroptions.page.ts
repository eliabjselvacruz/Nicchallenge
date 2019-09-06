import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useroptions',
  templateUrl: './useroptions.page.html',
  styleUrls: ['./useroptions.page.scss'],
})
export class UseroptionsPage{

  constructor(private router: Router) { }
  
  goLogin(){
    this.router.navigate(['/login']);
  }

  goSignup(){
    this.router.navigate(['/signup']);
  }

}
