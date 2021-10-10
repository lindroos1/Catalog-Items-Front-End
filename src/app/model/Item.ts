import { Schema } from "./Schema";


export class Item{

    public  name: string = " ";
    public id: string  = " ";
    public description: string = " ";
    public projectIds: string[] = [];
    public schema:Schema | undefined;
    public input:any;

    public userDescription:string= " ";
    public deploymentName:string = " "
}