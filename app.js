let amigos = [];

let sorteioRealizado = false;

   function adicionarAmigo() {
     let nomeInput = document.getElementById('amigo');
     let listaDeAmigosElemento = document.getElementById('listaAmigos');

     let nome = nomeInput.value.trim();

     if (nome === '') {
          alert('Insira um nome válido para ser adicionado');
          return;
     }

     if (amigos.map(a => a.toLowerCase()).includes(nome.toLowerCase())) {
          alert('Este nome já foi adicionado, insira outro nome');
          nomeInput.value = '';
          nomeInput.focus();
          return;
     }

     amigos.push(nome);

     const novoAmigoElemento = document.createElement('li');
     novoAmigoElemento.textContent = nome;
     listaDeAmigosElemento.appendChild(novoAmigoElemento);

     nomeInput.value = '';
     nomeInput.focus();
}

function sortearAmigo() {
     if (amigos.length < 2) {
          alert('São necessários pelo menos dois nomes para realizar o sorteio');
          return;
     }

     const indiceSorteado = Math.floor(Math.random() * amigos.length);
     const nomeSorteado = amigos[indiceSorteado];

     const resultadoElemento = document.getElementById('resultado');
     resultadoElemento.innerHTML = `<p class="result-list">O amigo secreto sorteado é: ${nomeSorteado}</p>`;

     sorteioRealizado = true;
} 