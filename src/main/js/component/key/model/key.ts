import { FormGroup } from "@angular/forms";

export class Key{
    name: string;
    description: string;
    projects: string;

    constructor(fb: FormGroup) {
        this.name = fb.get("name").value;
        this.description = fb.get("description").value;
        this.projects = fb.get("projects").value;
    }
}