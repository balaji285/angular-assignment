import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup.component';
import { SignupHeaderComponent } from './signup-header/signup-header.component';
import { SignupcontentComponent } from './signupcontent/signupcontent.component';



@NgModule({
  declarations: [
    SignupComponent,
    SignupHeaderComponent,
    SignupcontentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    SignupHeaderComponent
  ]
})
export class SignupModule { }
