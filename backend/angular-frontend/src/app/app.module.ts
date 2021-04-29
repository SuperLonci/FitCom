
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DatePipe } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import de from '@angular/common/locales/de';
registerLocaleData(de);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app/app.component';

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

import { CustomHttpInterceptor } from './http-interceptor';
import { AppService } from './app/app.service';
import { RegistrationDialog, RegistrationPage } from './registration/registration.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninDialog, SigninPage } from './signin/signin.component';

import { HomeComponent } from './home/home.component';
import { AdministrationComponent } from './administration/administrator.component';
import { FitnessCenterAdministrationComponent } from './fitness-center-administration/fitness-center.component';
import { AdministrationGuard } from './administration/administration.guard';
import { FitnessCenterGuard } from './fitness-center-administration/fitness-center.guard';
import { ApiService } from './api.service';
import { StaffComponent } from './fitness-center-administration/staff/staff.components';

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
    MatBadgeModule
];

@NgModule({
    declarations: [
        AppComponent,

        HomeComponent,
        AdministrationComponent,
        FitnessCenterAdministrationComponent,

        StaffComponent,

        RegistrationPage,
        RegistrationDialog,
        NotFoundComponent,
        SigninPage,
        SigninDialog
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
        // {
        //     provide: HTTP_INTERCEPTORS,
        //     useClass: CustomHttpInterceptor,
        //     multi: true
        // },
        DatePipe,
        AppService,
        ApiService,
        AdministrationGuard,
        FitnessCenterGuard
    ]
})
export class AppModule {}
