document.getElementById('formCadastro').addEventListener('submit', function(event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value;
  const data = document.getElementById('nascimento').value;
  const endereco = document.getElementById('endereco').value;
  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;
  const salario = document.getElementById('salario').value;

  const novoUsuario = {
    nome,
    data,
    endereco,
    usuario,
    senha,
    salario
  };

  fetch('https://maisgrana-wqjw.onrender.com/usuarios', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoUsuario)
  })
  .then(response => {
    if (response.ok) {
      alert('Usuário cadastrado com sucesso!');
      window.location.href = 'homepage.html';
    } else {
      alert('Erro ao cadastrar usuário.');
    }
  })
  .catch(error => {
    console.error('Erro na requisição:', error);
    alert('Erro de conexão com o servidor.');
  });
});