
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
    ) {
        const childRoute = activeRoute.snapshot?.firstChild?.routeConfig?.path;
        if (childRoute) this.selectedTab = this.tabs.findIndex(tab => tab.title === childRoute);
    }

    selectedTab: number = 0;

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
            title: 'Muskelgruppen',
            iconName: 'accessibility'
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

    didSelectTab(index: number): void {
        this.selectedTab = index;
        this.router.navigate(['Administration', this.tabs[index].title]);
    }

}
