
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationGuard } from './administration/administration.guard';
import { AdministrationComponent } from './administration/administrator.component';
import { FitnessCenterAdministrationComponent } from './fitness-center-administration/fitness-center.component';
import { FitnessCenterGuard } from './fitness-center-administration/fitness-center.guard';
import { StaffComponent } from './fitness-center-administration/staff/staff.components';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationPage } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Startseite',
        redirectTo: ''
    },
    {
        path: 'Administration',
        component: AdministrationComponent,
        canActivate: [AdministrationGuard],
        children: [
            {
                path: 'Fitnessstudios',

            },
            {
                path: 'Administratoren',

            }
        ]
    },
    {
        path: 'Fitnessstudio',
        component: FitnessCenterAdministrationComponent,
        canActivate: [FitnessCenterGuard],
        children: [
            {
                path: 'Fitnessstudio',
                component: StaffComponent
            },
            {
                path: 'Angestellte',
                component: StaffComponent
            },
            {
                path: 'Mitglieder',
                component: StaffComponent
            },
            {
                path: 'Anfragen',
                component: StaffComponent
            }
        ]
    },    
    // {
    //     path: 'Registrierung/:type/:activationToken',
    //     component: RegistrationPage
    // },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
