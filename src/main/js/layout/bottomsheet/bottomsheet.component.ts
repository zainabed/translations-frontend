import { Component } from '@angular/core';
import { BottomSheetService, BottomItems } from './bottomsheet.service';

@Component({
    selector: "bottom-sheet",
    templateUrl: "./bottomsheet.html",
    styleUrls: ["./bottomsheet.scss"]
})
export class BottomSheetComponent {

    items: Array<BottomItems>;

    constructor(public bottomSheetService: BottomSheetService) {

    }

    ngOnInit() {
        this.bottomSheetService.items.subscribe(items => {
            console.log(items);
            this.items = items;
        })
    }

}