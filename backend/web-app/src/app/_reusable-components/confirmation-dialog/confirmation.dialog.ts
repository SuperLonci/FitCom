
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
    templateUrl: './confirmation.dialog.html'
})
export class ConfirmationDialog {

    constructor(
        @Inject(MAT_DIALOG_DATA) public readonly data: {
            titlePrefixIconName: string
            title: string
            description: string
            buttonTitle: string
            warnAction: boolean
        },
        private readonly dialogReference: MatDialogRef<ConfirmationDialog>
    ) {}
    
    confirm(): void {
        this.dialogReference.close(true);
    }

}
