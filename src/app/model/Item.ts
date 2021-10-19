import { Input } from "@angular/core";
import { MonoTypeOperatorFunction } from "rxjs";
import { Projects } from "./Projects";
import {Typee} from "./Typee"
import { Versions } from "./Versions";

export class Item{

    public  name!: string;
    public id: string  = " ";
    public description: string = " ";
    //public projectIds: string[] = [];
    public input:Input | undefined;
    public type:Typee | undefined;
    public iconId!:string;
    public projects:Projects[] = [];

    public versions!:Versions[];

    //public deploymentName:string = " "
    //public userDescription:string= " ";
}