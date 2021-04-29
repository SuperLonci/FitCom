
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationGuard } from './administrator-surface/administration.guard';
import { AdministrationSurface } from './administrator-surface/administrator.component';
import { FitnessCenterSurface } from './fitness-center-surface/fitness-center.component';
import { FitnessCenterGuard } from './fitness-center-surface/fitness-center.guard';
import { HomeComponent } from './home-surface/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationPage } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'Administration',
        component: AdministrationSurface,
        canActivate: [AdministrationGuard]
    },
    {
        path: 'Fitnesstudio',
        component: FitnessCenterSurface,
        canActivate: [FitnessCenterGuard]
    },


    
    // {
    //     path: 'Registrierung/:type/:activationToken',
    //     component: RegistrationPage
    // },
    // {
    //     path: '**',
    //     redirectTo: '/nicht-gefunden'
    // },
    // {
    //     path: 'nicht-gefunden',
    //     component: NotFoundComponent
    // }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
