// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent } from './admin.component';
import { RoleListComponent } from './role-list/role-list.component';
import { EditRoleDialogComponent } from './edit-role-dialog/edit-role-dialog.component';
import { RoleEditorComponent } from './role-editor/role-editor.component';
import { UserListComponent } from './user-list/user-list.component';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';
import { ClientListComponent } from './client-list/client-list.component';
import { IdentityResourcesComponent } from './identityResource/identityResource.component';
import { ApiResourcesComponent } from './apiResource/apiResource.component';
import { PersistedGrantsComponent } from './persistedGrant/persistedGrant.component';
import { EditApiResourceDialogComponent } from './edit-api-resource-dialog/edit-api-resource-dialog.component';
import { ApiResourceEditorComponent } from './api-resource-editor/api-resource-editor.component';

@NgModule({
  imports: [
    SharedModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    RoleListComponent,
    EditRoleDialogComponent,
    RoleEditorComponent,
    UserListComponent,
    EditUserDialogComponent,
    ClientListComponent,
    IdentityResourcesComponent,
    ApiResourcesComponent,
    PersistedGrantsComponent,
    EditApiResourceDialogComponent,
    ApiResourceEditorComponent
  ],
  entryComponents: [
    EditUserDialogComponent,
    EditRoleDialogComponent,
    EditApiResourceDialogComponent
  ]
})
export class AdminModule {

}
