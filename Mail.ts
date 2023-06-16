//Clase mail y constructor//
export class mail{
  private _tipomail: string;
  private _direccionmail: string;

  constructor(TipoMail:string, DireccionMail:string){
   this._tipomail=TipoMail;
   this._direccionmail=DireccionMail;
 }
// Setters//
set TipoMail (TipoMail:string){
 this._tipomail = TipoMail
}
set DireccionMail (DireccionMail:string){
 this._direccionmail = DireccionMail
}
// Getters//
 get TipoMail(){
   return this._tipomail;
 }
 get DireccionMail(){
   return this._direccionmail;
 }
}
 
 
   