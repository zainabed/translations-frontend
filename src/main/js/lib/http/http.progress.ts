import { Injectable } from "@angular/core";

@Injectable()
export class HttpProgress {
    _progress: boolean;

    set progress(progress: boolean) {
        this._progress = progress;
    }

    get progress() {
        return this._progress;
    }

    start(){
        this.progress = true;
        console.log("Http Request started.");
    }

    end(){
        this.progress = false;
        console.log("Http request eneded.");
    }
}