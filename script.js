//ESERCIZIO 1
document.getElementById('salvaValore').addEventListener('click' , function(){
    let valoreInserito = document.getElementById('input').value;
    let nuovoNome = document.createElement("li");
    nuovoNome.textContent = valoreInserito;
    let lista = document.getElementById('listaNomi');
    lista.appendChild(nuovoNome);
    localStorage.setItem('nomeSalvato', valoreInserito);
})
document.getElementById('eliminaValore').addEventListener('click' , function(){
    let valoriInseriti = document.getElementById('listaNomi')
    valoriInseriti.innerHTML = "";
    localStorage.removeItem('nomeSalvato', valoriInseriti);
})


//ESERCIZIO 2
let contatore;
    if (sessionStorage.contatore) {
      contatore = parseInt(sessionStorage.getItem("contatore"));
    } else {
      contatore = 0;
    }

    setInterval(function() {
      contatore++;
      sessionStorage.setItem("contatore", contatore);
      document.getElementById("contatore").innerHTML = contatore;
    }, 1000);
  