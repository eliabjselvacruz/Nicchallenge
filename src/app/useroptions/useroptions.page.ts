import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-useroptions',
  templateUrl: './useroptions.page.html',
  styleUrls: ['./useroptions.page.scss'],
})
export class UseroptionsPage implements OnInit{
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
