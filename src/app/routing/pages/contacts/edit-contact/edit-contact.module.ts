import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { EditContactPageComponent } from './edit-contact-page/edit-contact-page.component'

@NgModule({
  declarations: [
    EditContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: EditContactPageComponent,
      }
    ])
  ]
})
export class EditContactModule { }
