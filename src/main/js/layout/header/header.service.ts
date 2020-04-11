import { Injectable } from "@angular/core";
import { Subject, Observable, Subscription } from 'rxjs';

export enum HEADER_TYPE {
    NORMAL = "normal",
    PROMINENT = "prominent"
}

export enum BACKGROUND_COLOR {
    WHITE = "white",
    BLACK = "black",
    PRIMARY = "primary",
    SECONDARY = "secondary",
    ACCENT = "accent"
}

export enum WINDOW_TYPE {
    DASHBOARD = 1,
    MODAL = 2
}
export enum FAB_DIRECTION {
    LEFT = "left",
    RIGHT = "right"
}

export enum HEADER_POSITION {
    STICKY = "sticky",
    NORMAL = "normal"
}

export interface HeaderEntity {
    title: string,
    fab?: boolean;
    fabTitle?: string;
    fabDirection?: FAB_DIRECTION;
    type: HEADER_TYPE;
    position: HEADER_POSITION;
    background: BACKGROUND_COLOR,
    onBack?: any;
    windowType?: WINDOW_TYPE
}

@Injectable()
export class HeaderService {
    private headerEvent: Subject<HeaderEntity>;
    constructor() {
        this.headerEvent = new Subject();
    }

    public getHeaderEvent(): Observable<HeaderEntity> {
        return this.headerEvent;
    }

    public setHeader(header: HeaderEntity) {
        this.headerEvent.next(header);
    }
}