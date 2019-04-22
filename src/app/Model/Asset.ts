export class Asset {
    assetId: string;
    description: string;
    quantity: number ;
    status: string;
    offeredQuantity: number;
    location: string ;
    owner: string ;
    assetType: string;

    constructor( assetId: '', description: '',quantity: number,status: '',offeredQuantity: number,location: '',owner: '' ,assetType:'') {
     this.assetId= assetId ;
     this.description= description;
     this.quantity=quantity ;
     this.status= status;
     this.offeredQuantity= offeredQuantity;
      this.location= location ;
      this.owner= owner ;
      this.assetType=assetType;
      }
}