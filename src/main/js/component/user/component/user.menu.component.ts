import {Component, OnInit} from "@angular/core";
import { UserStoreService } from '../service/user.store.service';

@Component({
    selector: "user-menu",
    templateUrl: "user-menu.html" 
})
export class UserMenuComponent implements OnInit{
    

    public user:any;
    constructor(private userStoreService:UserStoreService){
        
    }

    ngOnInit(): void {
       this.user = this.userStoreService.getItem();
    }

}