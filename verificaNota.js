//https://webapp.pucrs.br/consulta/servlet/consulta.aluno.Publicacoes?param=99574429

function keepAlive() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.open('GET', '/restricted_file_url');
  httpRequest.send(null);
}

setTimeout(function() {
  setInterval(keepAlive, 5000);
  var notaAlgAvan = $('body > table > tbody > tr:nth-child(11) > td:nth-child(3) > table > tbody > tr:nth-child(2) > td:nth-child(3)')
    .text()
    .trim();
  if (notaAlgAvan) {
    alert('Alg.Avancados: ' + notaAlgAvan);
  } else {
    console.warn('SEM NOTA AINDA...');
  }
}, 5000);

setTimeout(function() {
  location.reload();
}, 100000);
