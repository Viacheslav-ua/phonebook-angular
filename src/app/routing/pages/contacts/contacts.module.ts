import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ContactsPageComponent } from './contacts-page/contacts-page.component'

@NgModule({
  declarations: [
    ContactsPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: ContactsPageComponent,
      },
      {
        path: 'edit/:id',
        loadChildren: () => import('./edit/edit.module')
        .then(module => module.EditModule),
      },
    ])
  ]
})
export class ContactsModule { }
