/*
* @author Jordi Serra
* @since 2.0
*/
export class ModelOutputData<T> {
    success: boolean;
    status : string;
    data: Array<T>;
}