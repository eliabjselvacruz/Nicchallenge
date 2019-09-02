import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}

  goProfile(){
    this.router.navigate(['/profile']);
  }  
  goleaderBoard(){
    this.router.navigate(['/leaderboard']);
  }
  goChallenges(){
    this.router.navigate(['/challenges']);
  }
}
