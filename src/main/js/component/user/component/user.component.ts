import { Component } from "@angular/core";

@Component({
    template:`   
    <div fxLayout="row wrap" class="pad">
    <h1 fxFlex="0 0 100%" class="mat-h2">Users</h1>
    <router-outlet fxFlex="0 0 100%"></router-outlet>
</div>
    `
})
export class UserComponent {

}