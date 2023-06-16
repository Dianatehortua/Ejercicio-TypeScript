//Imports//
import { direccion } from "./Dirección";
import { mail } from "./Mail";
import { telefono } from "./Teléfono";
//Clase persona y constructor)
export class persona {
  _nombre: string;
  _apellidos: string;
  _edad: number;
  _dni: string;
  _cumpleaños: Date;
  _colorfavorito: string;
  _sexo: string;
  _direcciones: Array <direccion>;
  _mails: Array <mail>;
  _telefonos: Array <telefono>;
  _notas: string;
  
  constructor (Nombre:string, Apellidos:string, Edad:number, DNI:string, Cumpleaños:Date, ColorFavorito:string, Sexo: string, Direcciones: Array <direccion>, Mails: Array <mail>, Telefonos: Array <telefono>, Notas:string){
    this._nombre= Nombre;
    this._apellidos= Apellidos;
    this._edad= Edad;
    this._dni= DNI;
    this._cumpleaños= Cumpleaños;
    this._colorfavorito= ColorFavorito;
    this._sexo= Sexo;
    this._direcciones= Direcciones;
    this._mails= Mails;
    this._telefonos= Telefonos;
    this._notas= Notas;
  }
//Setters//
set Nombre (Nombre:string){
  this._nombre = Nombre
}
set Apellidos (Apellidos:string){
  this._apellidos = Apellidos
}
set Edad (Edad:number){
  this._edad = Edad
}
set DNI (DNI:string){
  this._dni = DNI
}
set Cumpleaños (Cumpleaños:Date){
  this._cumpleaños = Cumpleaños
}
set ColorFavorito (ColorFavorito:string){
  this._colorfavorito = ColorFavorito
}
set Sexo (Sexo:string){
  this._sexo = Sexo
}
set Direcciones (Direcciones: Array<direccion>){
  this._direcciones= Direcciones
}
set Mails (Mails: Array<mail>){
  this._mails= Mails
}
set Telefonos (Telefonos: Array<telefono>){
  this._telefonos= Telefonos
}
set Notas (Notas:string){
  this._notas = Notas
}
//Getters//
get Nombre(){
  return this._nombre;
}
get Apellidos(){
  return this._apellidos;
}
get Edad(){
  return this._edad;
}
get DNI(){
  return this._dni;
}
get Cumpleaños(){
  return this._cumpleaños;
}
get ColorFavorito(){
  return this._colorfavorito;
}
get Sexo(){
  return this._sexo;
}
get Direcciones(){
  return this._direcciones;
}
get Mails(){
  return this._mails;
}
get Telefonos(){
  return this._telefonos;
}
get Notas(){
  return this._notas;
}
AñadirDireccion(direccion:direccion) {
  this._direcciones.push(direccion)
}

AñadirTelefono(telefono:telefono) {
  this._telefonos.push(telefono)
}

AñadirMail(mail:mail) {
  this._mails.push(mail)
}
}
