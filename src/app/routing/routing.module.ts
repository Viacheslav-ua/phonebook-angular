import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./pages/home/home.module')
        .then(module => module.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module')
        .then(module => module.UserModule),
      },
      {
        path: 'registration',
        loadChildren: () => import('./pages/registration/registration.module')
        .then(module => module.RegistrationModule),
      },
      {
        path: 'login',
        loadChildren: () => import('./pages/login/login.module')
        .then(module => module.LoginModule),
      },
      {
        path: 'contacts',
        loadChildren: () => import('./pages/contacts/contacts.module')
        .then(module => module.ContactsModule),
      },
      {
        path: '**',
        loadChildren: () => import('./pages/not-found/not-found.module')
        .then(module => module.NotFoundModule),
      },

    ])
  ]
})
export class RoutingModule { }
