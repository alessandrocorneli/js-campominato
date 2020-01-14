var listaNumeri = [];


function inserimento(numeroInserito, listaNumeri) {
  for (var i = 0; i < 4; i++) {
    var numeroInserito = prompt("inserisci numero:");
    listaNumeri = listaNumeri.push(numeroInserito);
  }
  return listaNumeri;
}
console.log(listaNumeri);
