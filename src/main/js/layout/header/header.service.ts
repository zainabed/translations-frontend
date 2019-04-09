import { Injectable } from "@angular/core";
import { Service } from '@zainabed/tdi/core';

@Service()
export class HeaderService {
    public backgroundVisibility: boolean;

    constructor() {
        this.backgroundVisibility = true;
    }
}