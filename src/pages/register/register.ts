import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Config } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  constructor(private config: Config, public navCtrl: NavController, public navParams: NavParams) {
    this.config.set("scrollPadding", false);
    this.config.set("scrollAssist", false);
    this.config.set("autoFocusAssist", true);

    this.config.set("android", "scrollAssist", true );
    this.config.set("android", "autoFocusAssist", "delay");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
