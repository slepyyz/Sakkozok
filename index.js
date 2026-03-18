import { SAKKOZOK } from "./adatok.js";
import { adatokMegjelenit, utiE, rendezesek } from "./fuggvenyek.js";
import { atlosanUtesTeszt, egyenesenUtesTeszt } from "./teszt.js";




adatokMegjelenit(SAKKOZOK);
rendezesek(SAKKOZOK);
utiE();
egyenesenUtesTeszt();
atlosanUtesTeszt();