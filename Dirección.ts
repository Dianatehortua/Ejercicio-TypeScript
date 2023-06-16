//Clase dirección y constructor//
export class direccion{
   private _calle: string;
   private _numero: number;
   private _piso: number|boolean;
   private _letra: string|boolean;
   private _cp: number;
   private _poblacion: string;
   private _provincia: string;

   constructor(Calle:string, Numero:number, Piso:number|boolean, Letra:string|boolean, CP:number, Poblacion:string, Provincia:string){
    this._calle=Calle;
    this._numero=Numero;
    this._piso=Piso;
    this._letra=Letra;
    this._cp=CP;
    this._poblacion=Poblacion;
    this._provincia=Provincia;
  }
// Setters//
set Calle (Calle:string){
  this._calle = Calle
}
set Numero (Numero:number){
  this._numero = Numero
}
set Piso (Piso:number|boolean){
  this._piso = Piso
}
set Letra (Letra:string|boolean){
  this._letra = Letra
}
set CP (CP:number){
  this._cp = CP
}
set Poblacion (Poblacion:string){
  this._poblacion = Poblacion
}
set Provincia (Provincia:string){
  this._provincia = Provincia
}

// Getters//
  get Calle(){
    return this._calle;
  }
  get Numero(){
    return this._numero;
  }
  get Piso(){
    return this._piso;
  }
  get Letra(){
    return this._letra;
  }
  get CP(){
    return this._cp;
  }
  get Poblacion(){
    return this._poblacion;
  }
  get Provincia(){
    return this._provincia;
  }
  
}




