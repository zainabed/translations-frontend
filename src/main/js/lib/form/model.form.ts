import { ModelFormInterface } from './model.form.interface';
import { FormGroup, FormBuilder } from '@angular/forms';

export abstract class ModelForm<T> implements ModelFormInterface<T> {
    public form : FormGroup;

    constructor(protected fb: FormBuilder) {
        this.form = this.buildForm(fb);
    }

    abstract getData(): T;
    abstract buildForm(FormBuilder): FormGroup;

}