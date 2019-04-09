import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Login } from '../model/login';
import { ModelForm } from '../../../lib/form/model.form';
import { Autowired, Service } from "@zainabed/tdi/core";
import { FormContext } from "../../../lib/form/form.context";

@Service()
export class LoginForm extends ModelForm<Login> {


    constructor() {
        super();
    }

    buildForm(fb: FormBuilder): FormGroup {
        return fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    getData(): Login {
        let login: Login = new Login();
        login.username = this.form.get('username').value;
        login.password = this.form.get('password').value;

        return login;
    }

    reset() {
        this.form.reset();
    }

}