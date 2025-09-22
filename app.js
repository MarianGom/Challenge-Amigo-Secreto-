// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    input.focus();
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = '';
  input.focus();
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('No hay amigos para sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);

  const elegido = amigos[indice];

  const resultadoEl = document.getElementById('resultado');
  resultadoEl.innerHTML = '';

  const li = document.createElement('li');
  li.textContent = '🎉 El amigo secreto es: ' + elegido;
  resultadoEl.appendChild(li);
}

function mostrarLista() {
  const lista = document.getElementById('listaAmigos');

  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}
