export class Participant {
    ProsumerId : number ;
    Firstname : string ;
    lastname : string ;
    Balance : number ;
    constructor(ProsumerId: number ,Firstname : string , lastname : string , Balance : number){
      this.ProsumerId = ProsumerId ;
      this.Firstname = Firstname ;
      this.lastname =lastname ;
      this.Balance =Balance ;
    }

}