import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EditPageComponent } from './edit-page/edit-page.component'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [
    EditPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: EditPageComponent,
      }
    ])
  ]
})
export class EditModule { }
