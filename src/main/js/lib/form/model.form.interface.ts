import { FormGroup, FormBuilder } from '@angular/forms';

export interface ModelFormInterface<T> {
    getData(): T;
    buildForm(FormBuilder): FormGroup;
}