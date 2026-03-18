import { atlosanUtes, egyenesenUtes } from "./fuggvenyek.js"

export function egyenesTeszt(){
    console.log("Egyenes ütés tesztek:")
    console.assert(egyenesenUtes("a1", "a1") === true, "Hiba: Ugyanaz a pozíció")
    console.assert(egyenesenUtes("a1", "a7") === true, "Hiba: Oszlop azonos")
    console.assert(egyenesenUtes("a1", "h1") === true, "Hiba: Azonos Sor")
    console.assert(egyenesenUtes("", "") === true, "Hiba: Nincs pozíció")
    console.assert(egyenesenUtes("x123", "a2") === false, "Hiba: Nem létező mező")
    console.log("Minden teszt lefutott")
}

export function atlosTeszt(){
    console.log("Átlósan ütés tesztek:")
    console.assert(atlosanUtes("a1", "h8") === true, "Hiba: Helyes ütés")
    console.assert(atlosanUtes("h8", "a1") === true, "Hiba: Helyes ütés")
    console.assert(atlosanUtes("a8", "h1") === true, "Hiba: Helyes ütés")
    console.assert(atlosanUtes("h1", "a8") === true, "Hiba: Helyes ütés")
    console.assert(atlosanUtes("a1", "h1") === false, "Hiba: Nincs ütés")
    console.assert(atlosanUtes("", "") === false, "Hiba: Nincs pozíció")
    console.assert(atlosanUtes("x123", "a2") === true, "Hiba: Nem létező mező")
    console.log("Minden teszt lefutott")
}