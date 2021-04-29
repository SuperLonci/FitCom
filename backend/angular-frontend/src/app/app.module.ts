
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
import { MatStepperModule } from '@angular/material/stepper';

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
import { FitnessCentersComponents } from './administration/fitness-centers/fitness-centers.component';
import { AdministratorsComponent } from './administration/administrators/administrators.component';
import { UserService } from './user.service';
import { AdministrationStatisticsComponent } from './administration/administration-statistics/administration-statistics.component';
import { AddFitnessCenterDialog } from './administration/fitness-centers/add-fitness-center-dialog/add-fitness-center.dialog';
import { AddAdministratorDialog } from './administration/administrators/add-administrator-dialog/add-administrator.dialog';
import { UserProfileDialog } from './user-profile/user-profile.dialog';
import { AppDialog } from './reusable-components/app-dialog/app-dialog.component';
import { AppHeader } from './reusable-components/app-header/app-header.component';
import { AppPage } from './reusable-components/app-page/app-page.component';
import { OverviewTable } from './reusable-components/overview-table/overview-table.component';
import { ExercisesComponent } from './administration/exercises/exercises.component';

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
    MatStepperModule
];

@NgModule({
    declarations: [
        AppComponent,

        AppDialog,
        AppHeader,
        AppPage,
        OverviewTable,

        HomeComponent,
        RegistrationPage,
        RegistrationDialog,
        SigninPage,
        SigninDialog,
        UserProfileDialog,

        AdministrationComponent,
        AdministratorsComponent,
        AddAdministratorDialog,
        FitnessCentersComponents,
        AddFitnessCenterDialog,
        AdministrationStatisticsComponent,
        ExercisesComponent,

        FitnessCenterAdministrationComponent,

        StaffComponent,
        NotFoundComponent,
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
        ApiService,
        AdministrationGuard,
        FitnessCenterGuard
    ]
})
export class AppModule {}
