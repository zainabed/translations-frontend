import { FormGroup } from "@angular/forms";

export class Translation{
    content: string;
    verified: string;
    locales: string;
    keys: string;

    constructor(fb: FormGroup) {
        this.content = fb.get("content").value;
        this.verified = fb.get("verified").value;
        this.locales = fb.get("locales").value;
        this.keys = fb.get("keys").value;
    }
}