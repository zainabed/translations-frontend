import { Component } from '@angular/core';
import { ModalHeaderService } from './modal.header.service';
import { Router } from '@angular/router';

@Component({
    selector: "modal-header",
    templateUrl: "./modal-header.html",
    styleUrls: ["./modal-header.scss"]
})
export class ModalHeaderComponent {
    public type: string;

    constructor(public service: ModalHeaderService, private router: Router) {
        this.type = "prominent";
        
    }

    onBackClick($event){
        this.service.reset();
        this.router.navigate(['/projects']);
    }
}