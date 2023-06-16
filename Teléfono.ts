//Clase telefono y constructor//
export class telefono{
  private _tipotelefono: string;
  private _telefono: number;

  constructor(TipoTelefono:string, Telefono:number){
   this._tipotelefono=TipoTelefono;
   this._telefono=Telefono;
  }
// Setters//
set TipoTelefono (TipoTelefono:string){
 this._tipotelefono = TipoTelefono
}
set Telefono (Telefono:number){
 this._telefono = Telefono
}
// Getters//
 get TipoTelefono(){
   return this._tipotelefono;
 }
 get Telefono(){
   return this._telefono;
 }
}
