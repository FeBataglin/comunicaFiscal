import { Component } from '@angular/core';
import { Platform, Keyboard, Config } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(private config: Config, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.config.set("scrollPadding", false);
    this.config.set("scrollAssist", false);
    this.config.set("autoFocusAssist", true);

    this.config.set("android", "scrollAssist", true );
    this.config.set("android", "autoFocusAssist", "delay");
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}


