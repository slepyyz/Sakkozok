export function megjelenit(tbodyElem, sakkozo={nev,nemzetiseg,gyozelmek_szama}){
    let kod = `<tr><td>${sakkozo.nev}</td><td>${sakkozo.nemzetiseg}</td><td>${sakkozo.gyozelmek_szama}</td></tr>`;
    tbodyElem.innerHTML += kod;
}