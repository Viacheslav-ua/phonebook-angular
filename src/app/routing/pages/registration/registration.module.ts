import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { RegistrationPageComponent } from './registration-page/registration-page.component'

@NgModule({
  declarations: [
    RegistrationPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegistrationPageComponent,
      }
    ]),
  ],
})
export class RegistrationModule { }
