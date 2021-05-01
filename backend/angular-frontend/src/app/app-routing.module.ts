
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FitcomAdministrationAdministratorsComponent } from './fitcom-administration-administrators-component/fitcom-administration-administrators.component';
import { FitcomAdministrationComponent } from './fitcom-administration-component/fitcom-administration.component';
import { FitcomAdministrationExercisesComponent } from './fitcom-administration-exercises-component/fitcom-administration-exercises.component';
import { FitcomAdministrationFitnessCentersComponent } from './fitcom-administration-fitness-centers-component/fitcom-administration-fitness-centers.component';
import { HomeComponent } from './home-component/home.component';
import { ImpressumComponent } from './impressum-component/impressum.component';
import { NotFoundComponent } from './not-found-component/not-found.component';
import { PrivacyComponent } from './privacy-component/privacy.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { TermsOfServiceComponent } from './terms-of-service-component/terms-of-service.component';

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
        path: 'Nutzungsbedingungen',
        component: TermsOfServiceComponent
    },
    {
        path: 'Impressum',
        component: ImpressumComponent
    },
    {
        path: 'Datenschutz',
        component: PrivacyComponent
    },
    {
        path: 'Registrierung/:activationToken',
        component: RegistrationComponent
    },
    {
        path: 'Administration',
        component: FitcomAdministrationComponent,
        children: [
            {
                path: 'Administratoren',
                component: FitcomAdministrationAdministratorsComponent
            },
            {
                path: 'Trainingsübungen',
                component: FitcomAdministrationExercisesComponent
            },
            {
                path: 'Fitnessstudios',
                component: FitcomAdministrationFitnessCentersComponent
            },
            // {
            //     path: 'Statistiken'
            // }
        ]
    },


    // {
    //     path: 'Administration',
    //     component: AdministrationComponent,
    //     canActivate: [AdministrationGuard],
    //     children: [
    //         {
    //             path: 'Trainingsübungen',
    //             component: ExercisesComponent
    //         },
    //         {
    //             path: 'Statistiken',
    //             component: AdministrationStatisticsComponent
    //         },
    //         {
    //             path: 'Fitnessstudios',
    //             component: FitnessCentersComponents
    //         },
    //         {
    //             path: 'Administratoren',
    //             component: AdministratorsComponent
    //         }
    //     ]
    // },
    // {
    //     path: 'Fitnessstudio',
    //     component: FitnessCenterAdministrationComponent,
    //     canActivate: [FitnessCenterGuard],
    //     children: [
    //         {
    //             path: 'Fitnessstudio',
    //             component: StaffComponent
    //         },
    //         {
    //             path: 'Angestellte',
    //             component: StaffComponent
    //         },
    //         {
    //             path: 'Mitglieder',
    //             component: StaffComponent
    //         },
    //         {
    //             path: 'Anfragen',
    //             component: StaffComponent
    //         }
    //     ]
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
