import { Resource } from "../http/resource";

/**
 * 
 */
export interface ResourceForm {
   
    post();
    onPostSuccess(response: any);
    onPostFail(error: any);

    put(resource: Resource);
    onPutSuccess(response: any);
    onPutFail(error: any);
}