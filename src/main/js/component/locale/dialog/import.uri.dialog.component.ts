import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LocaleUri } from "../model/locale.uri";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
    selector: "import-uri-dialog",
    templateUrl: "import-ur-dialog.html"
})
export class ImportUriDialogComponent {

    form: FormGroup;

    constructor(public dilogRef: MatDialogRef<ImportUriDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: LocaleUri,
        fb: FormBuilder) {
        this.form = fb.group({
            uri: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
            locale: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(6)]]
        });
    }

    cancel(): void {
        this.dilogRef.close();
    }

    import() {
        this.dilogRef.close(this.form.get("uri").value);
    }
}