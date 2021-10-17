import { Input } from "@angular/core";
import { MonoTypeOperatorFunction } from "rxjs";
import { Projects } from "./Projects";
import { Schema } from "./Schema";
import {Typee} from "./Typee"

export class Item{

    public  name!: string;
    public id: string  = " ";
    public description: string = " ";
    public projectIds: string[] = [];
    public schema:Schema | undefined;
    public input:Input | undefined;
    public type:Typee | undefined;
    public iconId!:string;
    public projects:Projects[] = [];

    //public deploymentName:string = " "
    //public userDescription:string= " ";
}