const input = document.getElementById('inputNome');
const select = document.getElementById('selectGenere');
const output = document.getElementById('messaggio');
const bottone = document.getElementById('btnSaluta');

bottone.onclick = function() {
    let nome = input.value;
    let genere = select.value;


    
    if (nome === "") {
        output.innerText = "Attenzione: inserisci il nome!";
        input.classList.add("bordo-rosso");
    } 
    else {
        output.innerText = "Ciao " + nome + "!";
        
      
        if (genere === "Uomo") {
            input.classList.add("bordo-blu");
        } else {
            input.classList.add("bordo-rosa");
        }
    }
};