import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.page.html',
  styleUrls: ['./aboutus.page.scss'],
})
export class AboutusPage implements OnInit {

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
  ngOnInit() {
  }

}
