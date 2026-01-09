import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { SplashScreen } from '@capacitor/splash-screen';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
      this.showSplashScreen();
  }


  async showSplashScreen() {
    await SplashScreen.show({
      showDuration: 3000,
      autoHide: true,
      fadeInDuration: 500,
      fadeOutDuration: 500 
    });
  }

}