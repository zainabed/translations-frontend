import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface BottomItems {
    icon: string;
    link: string;
    title: string;
}

@Injectable()
export class BottomSheetService {
    
    public items: Subject<Array<BottomItems>>;

    constructor(){
        this.items = new Subject();
    }

    set(items: Array<BottomItems>){
        this.items.next(items);
    }

    reset() {
       // this.items = null;
    }
}