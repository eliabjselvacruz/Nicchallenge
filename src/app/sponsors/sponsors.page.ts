import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.page.html',
  styleUrls: ['./sponsors.page.scss'],
})
export class SponsorsPage implements OnInit {

  constructor(private router:Router) { }

  goProfile(){
    this.router.navigate(['/profile']);
  }  
  goleaderBoard(){
    this.router.navigate(['/leaderboard']);
  }
  goChallenges(){
    this.router.navigate(['/challenges']);
  }

  back(){
    this.router.navigate(['/home']);
  }
    
  ngOnInit() {
  }

}
