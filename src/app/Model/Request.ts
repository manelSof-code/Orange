import { timeInterval } from 'rxjs/operators';

export class Request{
    id :string ;
    Assettype:string;
    quantity:string;
    unitaryPrice:string;
    Begin_Time_slot:string;
    End_Time_slot:string;
    Publication_time:string;
    Expiration_time:string;
    Consumer:string ;
    Location:string;
    constructor( id :'' ,Assettype:'',quantity:'',unitaryPrice:'',Begin_Time_slot:'',End_Time_slot:'',Publication_time:'', Expiration_time:'',Consumer :'',Location:''){
        this.id =id ;
        this.Assettype=Assettype ;
        this.quantity=quantity ;
        this.unitaryPrice=unitaryPrice ;
        this.Begin_Time_slot = Begin_Time_slot ;
        this.End_Time_slot =End_Time_slot ;
        this.Publication_time =Publication_time ;
        this.Expiration_time =Expiration_time ;
        this.Consumer =Consumer ;
        this.Location =Location;
    }
}