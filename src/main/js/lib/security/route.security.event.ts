import { Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class RouteSecurityEvent {

    private _event: Subject<string>;
    
    constructor(){
        this._event = new Subject();
    }
    
    broadcast(value){
        this._event.next(value)
    }

    error(value) {
        this._event.error(value);
    }

    subscribe(subscription: any){
        this._event.subscribe(subscription);
    }
}