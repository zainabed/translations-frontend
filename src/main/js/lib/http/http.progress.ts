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
    }

    end(){
        this.progress = false;
    }
}