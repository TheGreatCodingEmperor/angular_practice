// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { NgModule } from '@angular/core';
import { Routes, RouterModule, DefaultUrlSerializer, UrlSerializer, UrlTree } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { RecoverPasswordComponent } from './components/recover-password/recover-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HomeComponent } from './components/home/home.component';
import { CustomersComponent } from './components/customers/customers.component';
import { ProductsComponent } from './components/products/products.component';
import { OrdersComponent } from './components/orders/orders.component';
import { SettingsComponent } from './settings/settings.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { Utilities } from './services/utilities';
import { GrantsComponent } from './components/grants/grants.component';

import { MyProfileComponent } from './components/myProfile/myProfile.component';

import { TwoFactorAuthenticationComponent } from './components/twoFactorAuthentication/twoFactorAuthentication.component';
import { DiscoveryDocumentComponent } from './components/discoveryDocument/discoveryDocument.component';
import { MyPersonalDataComponent } from './components/myPersonalData/myPersonalData.component';
import { ChangePasswordComponent } from './components/changePassword/changePassword.component';



export class LowerCaseUrlSerializer extends DefaultUrlSerializer {
  parse(url: string): UrlTree {
    const possibleSeparators = /[?;#]/;
    const indexOfSeparator = url.search(possibleSeparators);
    let processedUrl: string;

    if (indexOfSeparator > -1) {
      const separator = url.charAt(indexOfSeparator);
      const urlParts = Utilities.splitInTwo(url, separator);
      urlParts.firstPart = urlParts.firstPart.toLowerCase();

      processedUrl = urlParts.firstPart + separator + urlParts.secondPart;
    } else {
      processedUrl = url.toLowerCase();
    }

    return super.parse(processedUrl);
  }
}


const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard], data: { title: 'Home' } },
  { path: 'login', component: LoginComponent, data: { title: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { title: 'Register' } },
  { path: 'confirmemail', component: ConfirmEmailComponent, data: { title: 'Confirm Email' } },
  { path: 'recoverpassword', component: RecoverPasswordComponent, data: { title: 'Recover Password' } },
  { path: 'resetpassword', component: ResetPasswordComponent, data: { title: 'Reset Password' } },
  { path: 'customers', component: CustomersComponent, canActivate: [AuthGuard], data: { title: 'Customers' } },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard], data: { title: 'Products' } },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], data: { title: 'Orders' } },
  { path: 'grants', component: GrantsComponent, data: { title: 'Grants'}},
  { path: 'discoverydocument', component: DiscoveryDocumentComponent, data:{ title: 'Discovery Document'} },
  { path: 'myprofile', component: MyProfileComponent, data:{title: 'My Profile'} },
  { path: 'mypersonaldata', component: MyPersonalDataComponent, data:{title: 'My Personal Data'} },
  { path: 'twofactorauthentication', component: TwoFactorAuthenticationComponent, data:{ title: 'Two Factor Authentication' } },
  { path: 'changepassword', component: ChangePasswordComponent, data: { title: 'Change Password' } },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard], data: { title: 'Settings' } },

  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent, data: { title: 'Page Not Found' } }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthService,
    AuthGuard,
    { provide: UrlSerializer, useClass: LowerCaseUrlSerializer }]
})
export class AppRoutingModule { }
