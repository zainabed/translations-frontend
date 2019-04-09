import { Injectable } from "@angular/core";

@Injectable()
export class HeaderService {
    transparentBackground: boolean;

    constructor() {
        this.transparentBackground = false;
    }
}