import { timeInterval } from 'rxjs/operators';

export class offers{
    offerId:number;
    assetType:String ;
    quantity :number;
    unitaryPrice:string;
    Begin_Time_slot:string;
    End_Time_slot:string;
    Publication_time:string;
    Expiration_time:string;
    myAsset:string ;
    Location:string;
    constructor( offerId :number ,assetType:'' ,quantity:number,unitaryPrice:'',Begin_Time_slot:'',End_Time_slot:'',Publication_time:'', Expiration_time:'',myAsset :'',Location:''){
        this.offerId =offerId ;
        this.assetType=assetType ;
        this.quantity=quantity ;
        this.unitaryPrice=unitaryPrice ;
        this.Begin_Time_slot = Begin_Time_slot ;
        this.End_Time_slot =End_Time_slot ;
        this.Publication_time =Publication_time ;
        this.Expiration_time =Expiration_time ;
        this.myAsset =myAsset ;
        this.Location =Location;
    }
}