export class AssetType{
    assetTypeId: string;
    name: string;
    description: string;
    unit: string;
    constructor(  assetTypeId: '',name: '',description: '',unit: ''){
        this.assetTypeId=assetTypeId ;
        this.name =name ;
        this.description = description ;
        this.unit =unit ;
    }

}