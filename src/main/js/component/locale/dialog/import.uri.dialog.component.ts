import { Component, Inject } from "@angular/core";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LocaleUri } from "../model/locale.uri";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { FileFormat } from "../model/file.format";

@Component({
    selector: "import-uri-dialog",
    templateUrl: "import-ur-dialog.html"
})
export class ImportUriDialogComponent {

    form: FormGroup;
    formats: Array<FileFormat>;
    inputFile: File = null;

    constructor(public dilogRef: MatDialogRef<ImportUriDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: LocaleUri,
        fb: FormBuilder) {
        this.form = fb.group({
            uri: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
            locale: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
            format: [""]
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

    fileInput(files: FileList) {
        this.inputFile = files.item(0);
    }

    import() {
        let exportFile = null;
        if (this.inputFile) {
            exportFile = {
                file: this.inputFile,
                type: this.form.get("format").value
            };
        }
        console.log(exportFile);
        this.dilogRef.close(exportFile);
    }
}