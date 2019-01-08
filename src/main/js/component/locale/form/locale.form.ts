import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { ModelForm } from "../../../lib/form/model.form";

import { Locale } from "../model/locale";

@Injectable()
export class LocaleForm extends ModelForm<Locale> {

    constructor(fb: FormBuilder) {
        super(fb);
    }

    buildForm(fb: FormBuilder): FormGroup {
        return fb.group({
            name: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
            code: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(6)]],
            projects: ["", [Validators.required]]
        });
    }

    getData(): Locale {
        return new Locale(this.form);
    }


}