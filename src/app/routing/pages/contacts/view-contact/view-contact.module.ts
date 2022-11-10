import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ViewContactPageComponent } from './view-contact-page/view-contact-page.component'

@NgModule({
  declarations: [
    ViewContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ViewContactPageComponent,
      },
    ])
  ]
})
export class ViewContactModule { }
