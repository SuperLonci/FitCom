
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    templateUrl: './fitcom-administration.component.html',
    styleUrls: ['./fitcom-administration.component.scss']
})
export class FitcomAdministrationComponent {

    constructor(
        private readonly router: Router,
        public readonly activeRoute: ActivatedRoute
    ) {}

    readonly tabs = [
        {
            title: 'Administratoren',
            iconName: 'people'
        },
        {
            title: 'Trainingsübungen',
            iconName: 'fitness_center'
        },
        {
            title: 'Fitnessstudios',
            iconName: 'domain'
        },
        {
            title: 'Statistiken',
            iconName: 'analytics'
        },
    ];

    navigateTo(destination: string): void {
        this.router.navigate(['Administration', destination]);
    }

}
