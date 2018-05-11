import { Component, OnInit, AfterContentInit} from "@angular/core";

import { SidebarService } from "./sidebar.service";

@Component({
    selector: "sidebar",
    templateUrl: "sidebar.html"
})
export class SidebarComponent implements OnInit, AfterContentInit {
    constructor(private sidebar: SidebarService) {
    }

    ngOnInit() {
       
    }

    ngAfterContentInit(){
        
    }
    
}