
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './app-dialog.component.html',
    styleUrls: ['./app-dialog.component.scss']
})
export class AppDialog {
    
    @Input() titlePrefixIconName: string | undefined;
    @Input() title: string = 'Default Titel';
    @Input() isLoading: boolean = false;
    @Input() showActions: boolean = true;
    
}
