import { megjelenit } from "./tablazatMegjelenit.js";

export function adatokMegjelenit(SAKKOZOK) {
    const tbodyElem = document.querySelector("tbody");
    tbodyElem.innerHTML = "";
    SAKKOZOK.forEach(function (sakkozo, i) {
        megjelenit(tbodyElem, sakkozo);
    });
}

export function rendezesek(lista) {
    const nevGomb = document.querySelector("#nev");
    const orszagGomb = document.querySelector("#nemzetiseg");
    const nyertGomb = document.querySelector("#nyert");
    const kattintasokSzama={
        nev:0,
        nemzetiseg:0,
    }

    nevGomb.addEventListener("click", function (event) {
        let aktGombID = event.target.id;
        rendez(aktGombID,kattintasokSzama,lista);
    });

    orszagGomb.addEventListener("click", function (event) {
        let aktGombID = event.target.id;
        rendez(aktGombID,kattintasokSzama,lista);
    });
}

function rendez(aktGombID,kattintasokSzama,lista) {
    if (kattintasokSzama[aktGombID] % 2 == 0) {
        lista.sort(function (a, b) {
            return a[aktGombID] < b[aktGombID] ? 1 : -1;
        });
    } else {
        lista.sort(function (a, b) {
            return a[aktGombID] > b[aktGombID] ? 1 : -1;
        });
    }
    adatokMegjelenit(lista);
    kattintasokSzama[aktGombID] += 1;
}
