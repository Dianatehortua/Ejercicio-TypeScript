//Imports//
import { persona } from "./Persona";
import { direccion } from "./Dirección";
import { mail } from "./Mail";
import { telefono } from "./Teléfono";
//Registro persona 1 (dirección, mail, teléfono, persona)//
const DireccionLucía = new direccion (
  "Calle Portugal",
  3,
  4,
  "A",
  35500,
  "Arrecife",
  "Las Palmas",
  );
const MailLucía = new mail (
  "Email Personal",
  "luciap99@gmail.com"
  );
const TelefonoLucía = new telefono (
  "Móvil Personal",
  627459863,
  );    
const DatosLucía = new persona (
  'Lucía',
   'Pérez',
   24,
   '70989473K',
 new Date(1999,3,3),
  'Azul',
 'Femenino',
 [DireccionLucía],
 [MailLucía],
 [TelefonoLucía],
 'compañera de trabajo',
);
//Registro persona 2//
const DireccionMaría = new direccion (
  "Calle Férmina",
  32,
  2,
  "C",
  35500,
  "Arrecife",
  "Las Palmas",
  );
const MailMaría= new mail (
  "Email Personal",
  "mariab89@gmail.com"
  );
const TelefonoMaría= new telefono (
  "Móvil Personal",
  687946817,
  );    
const DatosMaría = new persona (
  'María',
   'Bellota',
   34,
   '79865024L',
 new Date(1989,7,8),
  'Rojo',
 'Femenino',
 [DireccionMaría],
 [MailMaría],
 [TelefonoMaría],
 'compañera curso de alemán',
);
//Registro persona 3//
const DireccionJorge = new direccion (
  "Calle Chafaris",
  8,
  false,
  false,
  35500,
  "Arrecife",
  "Las Palmas",
  );
const MailJorge= new mail (
  "Email Autoescuela",
  "autojorge@gmail.com"
  );
const TelefonoJorge= new telefono (
  "Móvil de Empresa",
  645897231,
  );    
const DatosJorge = new persona (
  'Jorge',
   'González',
   45,
   '70679370P',
 new Date(1978,4,19),
  'Amarillo',
 'Masculino',
 [DireccionJorge],
 [MailJorge],
 [TelefonoJorge],
 'Profesor Autoescuela Jorge',
);
//console.log para mostrar los registros//
const Contactos : Array <persona> = new Array (DatosLucía, DatosMaría, DatosJorge)
function MostrarContactos (): void{
  console.log ("Mostrando registro de contactos..." + Contactos);
}
MostrarContactos();
//Buscar contacto por DNI//
enum Contacto {DatosLucía="70989473K", DatosMaría="79865024L",DatosJorge="70679370P"}
console.log ("Los datos del contacto según búsqueda por DNI son:"+ Contacto ["79865024L"]);
//Añadir dirección, mail y teléfono al contacto buscado//
const María: persona = Contactos.find (persona => persona.DNI === "79865024L2") as persona;
const Direccion2María = new direccion ("Calle León y Castillo",
28,
1,
"A",
35500,
"Arrecife",
"Las Palmas");
const Mail2María = new mail ("Email Personal",
"maribel20123@gmail.com");
const Telefono2María = new telefono ("Móvil de empresa",
687359478)
María.AñadirDireccion (Direccion2María);
María.AñadirMail (Mail2María);
María.AñadirTelefono (Telefono2María);
//Mostrar registros tras el cambio//
MostrarContactos ();

