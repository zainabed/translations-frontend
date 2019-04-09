import {FormBuilder} from "@angular/forms";
import { Service } from "@zainabed/tdi/core";

@Service()
export class FormContext extends FormBuilder{

    constructor(){
        super();
    }
}