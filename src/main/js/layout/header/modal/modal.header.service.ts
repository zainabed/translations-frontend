import { Injectable } from '@angular/core';

export interface Menu {
    titel: string;
    icon: string;
    action: boolean
}

@Injectable()
export class ModalHeaderService {

    _title: string = "";

    menuItems: Array<Menu> = null;

    type: string = "prominent";

    position: string = "normal";

    color: string = "gray";

    mobile: boolean = false;

    set title(title: string) {
        this._title = title;
        let page = document.querySelector("n-page");
        if (title && document.body.clientWidth <= 420) {
            page.classList.add("page--modal");
            this.mobile = true;
        } else {
            page.classList.remove("page--modal");
            this.mobile = false;
        }
    }

    get title() {
        return this._title;
    }

    onBackClick() {

    }

    reset() {
        this.title = this.menuItems = this.color = this.type = this.position = null;
    }

    isMobile() {
        return this.mobile;
    }
}