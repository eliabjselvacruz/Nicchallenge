import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.page.html',
  styleUrls: ['./challenges.page.scss'],
})
export class ChallengesPage implements OnInit {

  constructor(private router:Router) { }


  goProfile(){
    this.router.navigate(['/profile']);
  }  
  goleaderBoard(){
    this.router.navigate(['/leaderboard']);
  }

  back(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
