import { timeInterval } from 'rxjs/operators';

export class offers{
    id :string ;
    quantity:string;
    unitaryPrice:string;
    Begin_Time_slot:string;
    End_Time_slot:string;
    Publication_time:string;
    Expiration_time:string;
    Asset:string ;
    Location:string;
    constructor( id :'' ,quantity:'',unitaryPrice:'',Begin_Time_slot:'',End_Time_slot:'',Publication_time:'', Expiration_time:'',Asset :'',Location:''){
        this.id =id ;
        this.quantity=quantity ;
        this.unitaryPrice=unitaryPrice ;
        this.Begin_Time_slot = Begin_Time_slot ;
        this.End_Time_slot =End_Time_slot ;
        this.Publication_time =Publication_time ;
        this.Expiration_time =Expiration_time ;
        this.Asset =Asset ;
        this.Location =Location;
    }
}