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
      url: '/list',
      icon: 'contact'
    },
    {
      title: 'Challenges',
      url: '/list',
      icon: 'flash'
    },
    {
      title: 'Tabla de Posiciones',
      url: '/list',
      icon: 'trophy'
    },
    {
      title: 'Patrocinadores',
      url: '/list',
      icon: 'contacts'
    },
    {
      title: 'FeedBack',
      url: '/list',
      icon: 'chatbubbles'
    },
    {
      title: 'Acerca de Nosotros',
      url: '/list',
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
