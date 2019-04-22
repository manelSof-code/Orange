import { timeInterval } from 'rxjs/operators';

export class Request{
    requestId :number ;
    AssetType:string;
    quantity:number;
    unitaryPrice:string;
    beginTimeSlot:Date;
    endTimeSlot:Date;
    publicationTime:Date;
    expirationTime:Date;
    location:string ;
    consumer:string;
    constructor( requestId :number ,AssetType:'',quantity:number,unitaryPrice:'',beginTimeSlot:Date,endTimeSlot:Date,publicationTime:Date,  expirationTime:Date,consumer :'',location:''){
        this.requestId =requestId ;
        this.AssetType =AssetType ;
        this.quantity=quantity ;
        this.unitaryPrice=unitaryPrice ;
        this.beginTimeSlot = beginTimeSlot ;
        this.endTimeSlot =endTimeSlot ;
        this.publicationTime =publicationTime ;
        this.expirationTime =expirationTime ;
        this.consumer =consumer ;
        this.location =location;
    }
}