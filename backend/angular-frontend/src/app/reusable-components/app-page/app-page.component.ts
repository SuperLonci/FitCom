
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-page',
    templateUrl: './app-page.component.html',
    styleUrls: ['./app-page.component.scss']
})
export class AppPage {

    @Input() titlePrefixIconName: string | undefined;
    @Input() title: string = '';
    @Input() subtitle: string | undefined;

}
