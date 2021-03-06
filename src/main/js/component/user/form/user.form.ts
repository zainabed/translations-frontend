import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../model/user';
import { ModelForm } from '../../../lib/form/model.form';

/**
 * 
 */
@Injectable()
export class UserForm extends ModelForm<User>{

    constructor(fb: FormBuilder) {
        super(fb);
    }

    buildForm(fb: FormBuilder): FormGroup {
        return fb.group({
            'username': ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
            'email': ['', [Validators.email, Validators.minLength(5), Validators.maxLength(30)]],
            'password': ['', Validators.required]
        });
    }

    getData(): User {
        let user: User = new User(null);
        user.username = this.form.get('username').value;
        user.email = this.form.get('email').value;
        user.password = this.form.get('password').value;
        return user;
    }
}