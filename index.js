import { SAKKOZOK } from "./adatok.js";
import { adatokMegjelenit, utiE, rendezesek } from "./fuggvenyek.js";
import { atlosTeszt, egyenesTeszt } from "./teszt.js";



adatokMegjelenit(SAKKOZOK);
rendezesek(SAKKOZOK);
utiE();
egyenesTeszt();
atlosTeszt();