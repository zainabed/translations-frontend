import { Injectable } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ModelForm } from "../../../lib/form/model.form";
import { Key } from "../model/key";
import { Service } from '@zainabed/tdi/core';

@Service()
export class KeyForm extends ModelForm<Key>{
    
    constructor() {
        super();
    }

    buildForm(fb: FormBuilder): FormGroup {
        return fb.group({
            name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
            description: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(200)]],
            projects: ["", [Validators.required]]
        });
    }

    getData(): Key {
        return new Key(this.form);
    }


}