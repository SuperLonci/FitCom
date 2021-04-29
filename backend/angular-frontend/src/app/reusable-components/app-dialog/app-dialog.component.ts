
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-dialog',
    templateUrl: './app-dialog.component.html',
    styleUrls: ['./app-dialog.component.scss']
})
export class AppDialog {

    @Input() titlePrefixIconName: string | undefined;
    @Input() title: string = '';
    @Input() subtitle: string | undefined;
    @Input() isLoading: boolean = false;
    @Input() showActions: boolean = false;

}
