export class Asset {
    Asset :String ;
    Description :String;
    Quantity :String ;
    AssetType :String;
    Owner :String ;
    constructor(Asset: string = '', Description: string = '', Quantity :string = '', AssetType:string = '',  Owner:string = '') {
        this.Asset  = Asset;
        this.Description = Description;
        this.Quantity= Quantity;
        this.AssetType=AssetType;
        this.Owner = Owner ;
      }
}