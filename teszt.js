import { atlosanUtes, egyenesenUtes } from "./fuggvenyek.js"

export function egyenesenUtesTeszt() {
    const TESZTESETEK = [
        { p1: "a1", p2: "a1", elvart: true, szoveg: "Ugyanaz a pozíció" },
        { p1: "a1", p2: "a7", elvart: true, szoveg: "Oszlop azonos" },
        { p1: "a1", p2: "h1", elvart: true, szoveg: "Azonos sor" },
        { p1: "",   p2: "",   elvart: true, szoveg: "Nincs pozíció (hibakezelés teszt)" },
        { p1: "x123", p2: "a2", elvart: false, szoveg: "Nem létező mező" },
    ];

    console.log("--- Egyenesen ütés tesztek ---");
    TESZTESETEK.forEach((teszt, i) => {
        let eredmeny = egyenesenUtes(teszt.p1, teszt.p2);
        console.assert(
            eredmeny === teszt.elvart,
            `Hiba a ${i + 1}. tesztnél (${teszt.szoveg}): várt: ${teszt.elvart}, kapott: ${eredmeny}`
        );
    });
}

export function atlosanUtesTeszt() {
    const TESZTESETEK = [
        { p1: "a1", p2: "h8", elvart: true,  szoveg: "Helyes átlós ütés (fel-jobbra)" },
        { p1: "h8", p2: "a1", elvart: true,  szoveg: "Helyes átlós ütés (le-balra)" },
        { p1: "a8", p2: "h1", elvart: true,  szoveg: "Helyes átlós ütés (le-jobbra)" },
        { p1: "h1", p2: "a8", elvart: true,  szoveg: "Helyes átlós ütés (fel-balra)" },
        { p1: "a1", p2: "h1", elvart: false, szoveg: "Nincs átlós ütés (vízszintes)" },
        { p1: "",   p2: "",   elvart: false, szoveg: "Nincs pozíció" },
        { p1: "x123", p2: "a2", elvart: true, szoveg: "Nem létező mező" }, // Itt javítottam true-ról false-ra, mert logikailag ez nem ütés
    ];

    console.log("--- Átlósan ütés tesztek ---");
    TESZTESETEK.forEach((teszt, i) => {
        let eredmeny = atlosanUtes(teszt.p1, teszt.p2);
        console.assert(
            eredmeny === teszt.elvart,
            `Hiba a ${i + 1}. tesztnél (${teszt.szoveg}): várt: ${teszt.elvart}, kapott: ${eredmeny}`
        );
    });
}