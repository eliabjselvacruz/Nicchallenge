import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage implements OnInit {

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
