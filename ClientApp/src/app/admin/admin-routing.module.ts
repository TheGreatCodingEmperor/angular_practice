// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';
import { RoleListComponent } from './role-list/role-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClientListComponent } from './client-list/client-list.component';

import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth-guard.service';
import { IdentityResourcesComponent } from './identityResource/identityResource.component';
import { ApiResourcesComponent } from './apiResource/apiResource.component';
import { PersistedGrantsComponent } from './persistedGrant/persistedGrant.component';


const adminRoutes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'users', component: UserListComponent, canActivate: [AuthGuard], data: { title: 'Admin | Users' } },
      { path: 'roles', component: RoleListComponent, canActivate: [AuthGuard], data: { title: 'Admin | Roles' } },
      { path: 'clients', component: ClientListComponent, canActivate: [AuthGuard], data: { title: 'Admin | Clients' }},
      { path: 'identityresources', component: IdentityResourcesComponent, canActivate: [AuthGuard], data: { title: 'Admin | Identity Resources' }},
      { path: 'apiresources', component: ApiResourcesComponent, canActivate: [AuthGuard], data: { title: 'Admin | Api Resources' }},
      { path: 'persistedgrants', component: PersistedGrantsComponent, canActivate: [AuthGuard], data: { title: 'Admin | Persisted Grants' }}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthService, AuthGuard
  ]
})
export class AdminRoutingModule { }
