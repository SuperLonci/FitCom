
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
registerLocaleData(de);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';

import { AppService } from './_services/app.service';
import { ApiService } from './_services/api.service';
import { UserService } from './_services/user.service';

import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { MatRippleModule } from '@angular/material/core';


import { SigninDialog } from './signin-dialog/signin.dialog';
import { AppHeader } from './_reusable-components/app-header/app-header.component';
import { AppDialog } from './_reusable-components/app-dialog/app-dialog.component';
import { AppPage } from './_reusable-components/app-page/app-page.component';
import { NotFoundComponent } from './not-found-component/not-found.component';
import { HomeComponent } from './home-component/home.component';
import { TermsOfServiceComponent } from './terms-of-service-component/terms-of-service.component';
import { ImpressumComponent } from './impressum-component/impressum.component';
import { PrivacyComponent } from './privacy-component/privacy.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { RegistrationDialog } from './registration-component/registration.dialog';
import { FitcomAdministrationComponent } from './fitcom-administration-component/fitcom-administration.component';
import { ForgotPasswordDialog } from './forgot-password-dialog/forgot-password.dialog';
import { FitcomAdministrationAdministratorsComponent } from './fitcom-administration-administrators-component/fitcom-administration-administrators.component';

const angularMaterialModules = [
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatInputModule,
    MatTableModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatDividerModule,
    MatProgressBarModule,
    MatExpansionModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatCheckboxModule,
    MatListModule,
    MatSliderModule,
    MatTabsModule,
    MatSidenavModule,
    MatBadgeModule,
    MatStepperModule,
    MatRippleModule
];

@NgModule({
    declarations: [
        AppComponent,

        // reusable components
        AppHeader,
        AppDialog,
        AppPage,
        
        RegistrationComponent,
        RegistrationDialog,
        SigninDialog,
        ForgotPasswordDialog,

        NotFoundComponent,
        HomeComponent,
        TermsOfServiceComponent,
        ImpressumComponent,
        PrivacyComponent,

        FitcomAdministrationComponent,
        FitcomAdministrationAdministratorsComponent
        
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        angularMaterialModules
    ],
    exports: [angularMaterialModules],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'de'
        },
        DatePipe,
        AppService,
        UserService,
        ApiService
    ]
})
export class AppModule {}
