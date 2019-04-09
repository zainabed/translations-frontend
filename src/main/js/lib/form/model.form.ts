import { ModelFormInterface } from './model.form.interface';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Autowired } from '@zainabed/tdi/core';
import { FormContext } from './form.context';

export abstract class ModelForm<T> implements ModelFormInterface<T> {

    @Autowired()
    protected fb: FormContext;

    public form: FormGroup;

    constructor() {
        this.form = this.buildForm(this.fb);
    }

    abstract getData(): T;
    abstract buildForm(fb: FormContext): FormGroup;

}