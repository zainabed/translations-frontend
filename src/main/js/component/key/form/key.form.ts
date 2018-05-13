import {Injectable} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import {ModelForm} from "../../../lib/form/model.form";
import {Key} from "../model/key";

@Injectable()
export class KeyForm extends ModelForm<Key>{
    constructor(fb: FormBuilder) {
        super(fb);
    }

    buildForm(fb: FormBuilder): FormGroup {
        return fb.group({
            name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
            description: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
            projects: ["", [Validators.required]]
        });
    }

    getData(): Key {
        return new Key(this.form);
    }


}