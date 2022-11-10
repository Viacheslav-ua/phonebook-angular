import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { UserPageComponent } from './user-page/user-page.component'

@NgModule({
  declarations: [
    UserPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UserPageComponent,
      }
    ])
  ]
})
export class UserModule { }
