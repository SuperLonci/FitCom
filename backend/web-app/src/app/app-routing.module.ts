
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './public-pages/home-component/home.component';
import { ImpressumComponent } from './public-pages/impressum-component/impressum.component';
import { NotFoundComponent } from './public-pages/not-found-component/not-found.component';
import { PrivacyComponent } from './public-pages/privacy-component/privacy.component';
import { TermsOfServiceComponent } from './public-pages/terms-of-service-component/terms-of-service.component';

const routes: Routes = [
    {
        path: 'Startseite',
        redirectTo: ''
    },
    {
        path: '',
        component: HomeComponent
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
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
