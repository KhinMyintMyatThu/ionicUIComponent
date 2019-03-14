import { Component } from '@angular/core';
import { ActionSheetController, AlertController, LoadingController } from '@ionic/angular';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public alertController: AlertController, private actionSheet: ActionSheetController, private loadingController: LoadingController){}
  
  async presentAlert(){
    const alert=await this.alertController.create({
      header: 'Alert',
      subHeader: 'Sub Alert',
      message: 'This is an alert message.',
      animated: false,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        handler:()=>{
          console.log('You clicked me!');
        }
      },
      {
        text: 'Okay',
        cssClass: 'secondary',
        handler:()=>{
          console.log('Second handler');
        }
      },
      {
        text: 'Open Action Sheet',
        cssClass: 'primary',
        handler: async ()=>{
          const action= await this.actionSheet.create({
            header: 'Testing Action',
            buttons: [
              {
                  text: 'Test',
                  role: 'cancel',
                  handler: ()=>{
                     console.log('hey hello');
                  }
              }
            ]
          });
          await action.present();
        }
      }
    ]
  }); 
  await alert.present();
}

async presentLoadingWithOptions() {
  const loading = await this.loadingController.create({
    spinner: 'dots',
    mode: 'md',
    translucent: true,
    duration: 5000,
    message: 'Please wait...'
  });
  return await loading.present();
}

}
