import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LocaleUri } from "../model/locale.uri";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

interface FileFormat {
    title: string;
    format: string;
}

@Component({
    selector: "export-dialog",
    templateUrl: "export-dialog.html"
})
export class ExportDialogComponent {

    formats: Array<FileFormat>;
    form: FormGroup;

    constructor(public dilogRef: MatDialogRef<ExportDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: LocaleUri, fb: FormBuilder) {
        this.form = fb.group({
            format: ["", [Validators.required]]
        });

        this.formats = [
            { title: "Java Property file", format: "property" },
            { title: "Android String XMl", format: "string-xml" },
            { title: "JSON File", format: "json" },
            { title: ".Net MVC Resx", format: "resx" }
        ];
    }

    cancel(): void {
        this.dilogRef.close();
    }

    download() {
        this.dilogRef.close(this.form.get("format").value);
    }
}