import { Injectable } from "@angular/core";
import { ModelForm } from "../../../lib/form/model.form";
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Login } from "../model/login";

@Injectable()
export class LoginForm extends ModelForm<Login>{

    constructor(fb: FormBuilder) {
        super(fb);
    }


    buildForm(fb: FormBuilder) {
        return fb.group({
            username: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            password: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(50)]]
        });
    }

    getData() {
        return new Login(this.form);
    }
}