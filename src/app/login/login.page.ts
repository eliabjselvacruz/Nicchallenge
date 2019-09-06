import { Component, OnInit } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(private authservice: AuthService, public router: Router, public alertController: AlertController) { }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Datos de Usuario',
      message: 'Los datos ingresados son incorrectos o este usario no se encuentra registrado.',
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

  OnSubmitLogin() {

    this.authservice.login(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => this.presentAlert());
  }

}
