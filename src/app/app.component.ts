import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/profile',
      icon: 'contact'
    },
    {
      title: 'Challenges',
      url: '/challenges',
      icon: 'flash'
    },
    {
      title: 'Tabla de Posiciones',
      url: '/leaderboard',
      icon: 'trophy'
    },
    {
      title: 'Patrocinadores',
      url: '/sponsors',
      icon: 'contacts'
    },
    {
      title: 'FeedBack',
      url: '/feedback',
      icon: 'chatbubbles'
    },
    {
      title: 'Acerca de Nosotros',
      url: '/aboutus',
      icon: 'at'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
