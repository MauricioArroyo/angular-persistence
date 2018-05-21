/*
* @author Jordi Serra
* @since 2.0
*/
export interface ModelOutputData<T> {
    ready?: boolean;
    status?: string;
    data?: Array<T>;
}