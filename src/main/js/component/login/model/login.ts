import {FormGroup} from "@angular/forms";

export class Login {
    username: string;
    password: string;

    constructor(fb: FormGroup) {
        this.username = fb.get("username").value;
        this.password = fb.get("password").value;
    }
}