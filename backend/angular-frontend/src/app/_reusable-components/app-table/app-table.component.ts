import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './app-table.component.html',
    styleUrls: ['./app-table.component.scss']
})
export class AppTable {

    @Input() items: any[] = [];
    @Input() footerText: string = '';
    @Input() noDataText: string = '';
    @Input() tooltipAttributeName: string = '';
    @Input() columns: {
        objectKey: string
        title: string
        flex?: string,
        textAlign?: string
    }[] = [];
    @Input() rewriteRule?: (attributeName: string, attributeValue: string) => string;

    @Output() createItem = new EventEmitter();
    @Output() selectItem = new EventEmitter();

}
