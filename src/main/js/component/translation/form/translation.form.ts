import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ModelForm } from "../../../lib/form/model.form";
import { Translation } from "../model/translation";

@Injectable()
export class TranslationForm extends ModelForm<Translation>{
    constructor(fb: FormBuilder) {
        super(fb);
    }

    buildForm(fb: FormBuilder): FormGroup {
        return fb.group({
            content: ["", [Validators.required, Validators.minLength(1), Validators.maxLength(2500)]],
            verified: [""],
            locales: ["", [Validators.required]],
            keys: ["", [Validators.required]],
            projects: ["", [Validators.required]],
        });
    }

    getData(): Translation {
        return new Translation(this.form);
    }


}