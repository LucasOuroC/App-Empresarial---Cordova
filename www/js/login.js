document.addEventListener('deviceready', function() {
  var firebase = window.FirebasePlugin;

  // Função para enviar o código de verificação
  document.getElementById('sendCodeButton').addEventListener('click', function() {
    var phoneNumber = document.getElementById('phoneNumber').value;

    firebase.verifyPhoneNumber(phoneNumber, 60, function(credential) {
      console.log('Código de verificação enviado: ', credential);
      window.confirmationResult = credential;
      alert("Código de verificação enviado!");
      // Aqui você poderia exibir um campo para o usuário inserir o código enviado por SMS
    }, function(error) {
      console.error("Erro ao enviar o código de verificação: ", error);
      alert("Erro ao enviar o código de verificação.");
    });
  });

  // Função para verificar o código de verificação e fazer login
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var verificationCode = document.getElementById('verificationCode').value;
    var confirmationResult = window.confirmationResult;

    if (!confirmationResult) {
      alert("Primeiro envie o código de verificação.");
      return;
    }

    confirmationResult.confirm(verificationCode).then(function(userCredential) {
      // Usuário autenticado com sucesso.
      var user = userCredential.user;
      console.log('Usuário autenticado: ', user);
      window.location.href = 'home.html'; // Redirecionar para a página principal após login
    }).catch(function(error) {
      // Usuário não conseguiu fazer login (código de verificação inválido?)
      console.error("Erro ao verificar o código: ", error);
      alert("Código de verificação inválido ou expirado.");
      window.location.href = 'login.html'; // Redirecionar de volta para a página de login
    });
  });
});
