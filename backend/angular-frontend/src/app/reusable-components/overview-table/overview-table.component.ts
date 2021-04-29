
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'overview-table',
    templateUrl: './overview-table.component.html',
    styleUrls: ['./overview-table.component.scss']
})
export class OverviewTable {

    @Input() items: any[] = [];
    @Input() footerText: string = '';
    @Input() noDataText: string = '';
    @Input() tooltipAttributeName: string = '';
    @Input() columns: {
        title: string,
        attributeName: string,
        flex?: string,
        textAlign?: string
    }[] = [];
    @Input() rewriteRule?: (attributeName: string, attributeValue: string) => string;

    @Output() createItem = new EventEmitter();
    @Output() selectItem = new EventEmitter();

}
