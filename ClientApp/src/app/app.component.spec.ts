// =============================
// Email: info@eXentric.work
// www.eXentric.work/templates
// =============================

import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { UltraAppProMaterialModule } from './modules/material.module';
import { FooterModule } from './shared/footer/footer.component';
import { ThemePickerModule } from './shared/theme-picker/theme-picker.component';

import { AppComponent } from './app.component';
import { LoginControlComponent } from './components/login/login-control.component';
import { NotificationsViewerComponent } from './components/controls/notifications-viewer.component';

import { OAuthModule } from 'angular-oauth2-oidc';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { ToastaModule } from 'ngx-toasta';

import { AuthService } from './services/auth.service';
import { AppTitleService } from './services/app-title.service';
import { AppTranslationService, TranslateLanguageLoader } from './services/app-translation.service';
import { ConfigurationService } from './services/configuration.service';
import { AlertService } from './services/alert.service';
import { LocalStoreManager } from './services/local-store-manager.service';
import { NotificationService } from './services/notification.service';
import { NotificationEndpoint } from './services/notification-endpoint.service';
import { AccountService } from './services/account.service';
import { AccountEndpoint } from './services/account-endpoint.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
        UltraAppProMaterialModule,
        FooterModule,
        ThemePickerModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateLanguageLoader
          }
        }),
        OAuthModule.forRoot(),
        ToastaModule.forRoot(),
      ],
      declarations: [
        AppComponent,
        LoginControlComponent,
        NotificationsViewerComponent
      ],
      providers: [
        AuthService,
        AlertService,
        ConfigurationService,
        AppTitleService,
        AppTranslationService,
        NotificationService,
        NotificationEndpoint,
        AccountService,
        AccountEndpoint,
        LocalStoreManager
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'UltraApp PRO'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance as AppComponent;
    expect(app.appTitle).toEqual('UltraApp PRO');
  });

  it(`should render 'UltraApp' in a p tag`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('p').textContent).toContain('UltraApp');
  });
});
