import { Resources } from "../http/resources";

export interface ResourceList {
    get();
    onGetSuccess(response: Resources);
    onGetFail(error);
}