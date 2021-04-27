
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found-component/not-found.component';
import { RegistrationPage } from './registration-component/registration.component';

const routes: Routes = [
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     redirectTo: 'Kalender'
    // },
    {
        path: 'Registrieren/:activationToken',
        component: RegistrationPage
    },
    {
        path: '**',
        redirectTo: '/nicht-gefunden'
    },
    {
        path: 'nicht-gefunden',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
