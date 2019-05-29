import { NgModule } from '@angular/core';
import { IonicPageModule, IonicModule } from 'ionic-angular';
import { RegisterPage } from './register';
import { MyApp } from '../../app/app.component';


@NgModule({
  declarations: [
    RegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(RegisterPage),
    IonicModule.forRoot(MyApp, { scrollAssist: false, autoFocusAssist: false })
  ],
})
export class RegisterPageModule {}
