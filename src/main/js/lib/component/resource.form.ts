import { Resource } from "../http/resource";

export interface ResourceForm {
    post();
    onPostSuccess(response: any);
    onPostFail(error: any);

    patch(resource: Resource);
    onPatchSuccess(response: any);
    onPatchFail(error: any);
}