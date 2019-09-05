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

  choosed: Boolean;
  

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

  click(str){
    var sect = document.getElementById("section");
    if (str == "1") {
      sect.innerHTML = `<ion-card-header>
      <ion-card-title>Iniciar Sesión</ion-card-title>
      <ion-card-subtitle>Ingrese sus datos</ion-card-subtitle>
    </ion-card-header>
    <ion-card-content>
      <ion-card>
        <ion-card-content>
          <form action="user" class="center">
            <ion-item class="">
              <ion-label position="floating" >Usuario</ion-label>
              <ion-input type="email" [(ngModel)]="email" name="email"></ion-input>
            </ion-item>
            <ion-item class="user">
              <ion-label position="floating">Contraseña</ion-label>
              <ion-input [(ngModel)]="password" type="password" name="password"></ion-input>
            </ion-item>
          </form>
          <ion-button (click)="OnSubmitLogin()" class="button">Ingresar</ion-button>
        </ion-card-content>
      </ion-card>
    </ion-card-content>`
    }else{

      sect.innerHTML = `<ion-card-header>
        <ion-card-title>Registrarse</ion-card-title>
        <ion-card-subtitle>Ingrese sus datos para registrarse</ion-card-subtitle>
      </ion-card-header>
        <ion-card-content>
          <ion-card>
            <ion-card-content>
              <form action="" class="center">
                <ion-item class="">
                  <ion-label position="floating" >Nombre</ion-label>
                  <ion-input  name="userName"></ion-input>
                </ion-item>
                <ion-item class="">
                  <ion-label position="floating" >Apellido</ion-label>
                  <ion-input  name="userSurname"></ion-input>
                </ion-item>
                <ion-item class="">
                  <ion-label position="floating" >Edad</ion-label>
                  <ion-input  type="number" name="userAge" min=0 ></ion-input>
                </ion-item>
                <ion-item class="">
                  <ion-label position="floating" >Correo</ion-label>
                  <ion-input  type="email" name="userEmail"></ion-input>
                </ion-item>
                <ion-item class="">
                  <ion-label position="floating" >País</ion-label>
                  <ion-input  name="userCountry"></ion-input>
                </ion-item>
                <ion-item class="">
                  <ion-label position="floating" >Departamento</ion-label>
                  <ion-input  name="userDepart"></ion-input>
                </ion-item>
                <ion-item class="user">
                  <ion-label position="floating">Contraseña</ion-label>
                  <ion-input type="password" name="userPassword"></ion-input>
                </ion-item>
                <ion-item class="user">
                  <ion-label position="floating">Confirmar Contraseña</ion-label>
                  <ion-input type="password" name="userPassword2"></ion-input>
                </ion-item>
              </form>
              <ion-button class="button">Registrarse</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-card-content>`
    }
  }


  ngOnInit() {   
  }



  OnSubmitLogin() {

    this.authservice.login(this.email, this.password).then(res => {
      this.router.navigate(['/home']);
    }).catch(err => this.presentAlert());
  }

}
