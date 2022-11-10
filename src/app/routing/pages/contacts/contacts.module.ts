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
        loadChildren: () => import('./edit-contact/edit-contact.module')
        .then(module => module.EditContactModule),
      },
      {
        path: 'view/:id',
        loadChildren: () => import('./view-contact/view-contact.module')
        .then(module => module.ViewContactModule),
      },
    ])
  ]
})
export class ContactsModule { }
