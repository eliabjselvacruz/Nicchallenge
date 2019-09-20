import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(private router:Router) { }
 
  goleaderBoard(){
    this.router.navigate(['/leaderboard']);
  }
  goChallenges(){
    this.router.navigate(['/challenges']);
  }

  back(){
    this.router.navigate(['/home']);
  }

  goEditProfile(){
    this.router.navigate(['/editprofile']);
  }

  ngOnInit() {
  }

}
