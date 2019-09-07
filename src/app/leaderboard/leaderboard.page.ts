import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.page.html',
  styleUrls: ['./leaderboard.page.scss'],
})
export class LeaderboardPage implements OnInit {

  constructor(private router:Router) { }

  goProfile(){
    this.router.navigate(['/profile']);
  }  
  goChallenges(){
    this.router.navigate(['/challenges']);
  }

  ngOnInit() {
  }

}
