let pirmas = document.getElementById('one');
let antras = document.getElementById('two');

pirmas.addEventListener('click', efektas);
antras.addEventListener('click', efektasPass);

function efektas() {
  pirmas.classList.add('focus');
  rem(antras);
}
function efektasPass() {
  antras.classList.add('focus');
  rem(pirmas);
}

function rem(klase) {
  klase.classList.remove('focus');
}
