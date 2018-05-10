import { FormGroup } from "@angular/forms";

export class Locale {
    private name: string;
    private code: string;

    constructor(fb: FormGroup) {
        this.name = fb.get("name").value;
        this.code = fb.get("code").value;
    }

    
}