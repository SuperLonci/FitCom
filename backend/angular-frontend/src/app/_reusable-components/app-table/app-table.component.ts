
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-table',
    templateUrl: './app-table.component.html',
    styleUrls: ['./app-table.component.scss']
})
export class AppTable {

    @Input() dataSet: any[] = [];
    @Input() columns: {
        objectKey: string
        title: string
        alignment?: string
    }[] = [];

    @Input() noDataText: string | undefined;
    @Input() footerText: string | undefined;


    columnKeys = (): any[] => this.columns.map(column => column.objectKey);

}
