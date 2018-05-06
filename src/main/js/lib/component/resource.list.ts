import { Resources } from "../http/resources";

export interface ResourceList {
    setResource();
    get();
    onGetSuccess(response: Resources);
    onGetFail(error);
}