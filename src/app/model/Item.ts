import { Input } from "@angular/core";
import { Schema } from "./Schema";


export class Item{

    public  name: string = " ";
    public id: string  = " ";
    public description: string = " ";
    public projectIds: string[] = [];
    public schema:Schema | undefined;
    public input:Input | undefined;

    //public deploymentName:string = " "
    //public userDescription:string= " ";
}