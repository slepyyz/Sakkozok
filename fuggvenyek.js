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
    const kattintasokSzama = {
        nev: 0,
        nemzetiseg: 0,
    };

    nevGomb.addEventListener("click", function (event) {
        let aktGombID = event.target.id;
        rendez(aktGombID, kattintasokSzama, lista);
    });

    orszagGomb.addEventListener("click", function (event) {
        let aktGombID = event.target.id;
        rendez(aktGombID, kattintasokSzama, lista);
    });
}

function rendez(aktGombID, kattintasokSzama, lista) {
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

function egyenesenUtes(pozicio1, pozicio2) {
        if (pozicio1[0] == pozicio2[0]) {
            return true;
        } else if (pozicio1[1] == pozicio2[1]) {
            return true;
        }else{
            return false;
        }
    }

function atlosanUtes(pozicio1, pozicio2){
    let betu1 = 0
    let betu2 = 0

    switch (pozicio1[0]) {
        case "a":
            betu1=1
            break;
        case "b":
            betu1=2
            break;
        case "c":
            betu1=3
            break;
        case "d":
            betu1=4
            break;
        case "e":
            betu1=5
            break;
        case "f":
            betu1=6
            break;
        case "g":
            betu1=7
            break;
        case "h":
            betu1=8
            break;
            
    }

    switch (pozicio2[0]) {
        case "a":
            betu2=1
            break;
        case "b":
            betu2=2
            break;
        case "c":
            betu2=3
            break;
        case "d":
            betu2=4
            break;
        case "e":
            betu2=5
            break;
        case "f":
            betu2=6
            break;
        case "g":
            betu2=7
            break;
        case "h":
            betu2=8
            break;
    }

    let fuggolegesKulonbseg = Math.abs(pozicio1[1]-pozicio2[1]);
    let vizszintesKulonbseg = Math.abs(betu1-betu2);

    return fuggolegesKulonbseg ==  vizszintesKulonbseg;
}

export function utiE() {
    const okGomb = document.querySelector("button");

    okGomb.addEventListener("click",function(){

        const pozicio1 = document.getElementById("pozicio1").value
        const pozicio2 = document.getElementById("pozicio2").value

        let egyenesenUti = egyenesenUtes(pozicio1,pozicio2);
        let atlosanUti = atlosanUtes(pozicio1,pozicio2)

        console.log(egyenesenUti)
        console.log(atlosanUti)
        if (egyenesenUti || atlosanUti) {
            alert("A két bábu üti egymást!");
        } else {
            alert("A két bábu nem üti egymást!");
        }
    })
}

function egyenesenUtes(pozicio1, pozicio2) {
        if (pozicio1[0] == pozicio2[0]) {
            return true;
        } else if (pozicio1[1] == pozicio2[1]) {
            return true;
        }else{
            return false;
        }
    }

function atlosanUtes(pozicio1, pozicio2){
    let betu1 = 0
    let betu2 = 0

    switch (pozicio1[0]) {
        case "a":
            betu1=1
            break;
        case "b":
            betu1=2
            break;
        case "c":
            betu1=3
            break;
        case "d":
            betu1=4
            break;
        case "e":
            betu1=5
            break;
        case "f":
            betu1=6
            break;
        case "g":
            betu1=7
            break;
        case "h":
            betu1=8
            break;
            
    }

    switch (pozicio2[0]) {
        case "a":
            betu2=1
            break;
        case "b":
            betu2=2
            break;
        case "c":
            betu2=3
            break;
        case "d":
            betu2=4
            break;
        case "e":
            betu2=5
            break;
        case "f":
            betu2=6
            break;
        case "g":
            betu2=7
            break;
        case "h":
            betu2=8
            break;
    }

    let fuggolegesKulonbseg = pozicio1[1]-pozicio2[1];
    let vizszintesKulonbseg = betu1-betu2;

    return fuggolegesKulonbseg ==  vizszintesKulonbseg;
}

export function utiE() {
    const okGomb = document.querySelector("button");

    okGomb.addEventListener("click",function(){

        const pozicio1 = document.getElementById("pozicio1").value
        const pozicio2 = document.getElementById("pozicio2").value

        let egyenesenUti = egyenesenUtes(pozicio1,pozicio2);
        let atlosanUti = atlosanUtes(pozicio1,pozicio2)

        console.log(egyenesenUti)
        console.log(atlosanUti)
        if (egyenesenUti || atlosanUti) {
            alert("A két bábu üti egymást!");
        } else {
            alert("A két bábu nem üti egymást!");
        }
    })
}
