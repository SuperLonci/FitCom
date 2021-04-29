
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './app-header.component.html',
    styleUrls: ['./app-header.component.scss']
})
export class AppHeader {
    
    @Input() titlePrefixIconName: string | undefined;
    @Input() title: string = '';
    @Input() subtitle: string | undefined;

}
