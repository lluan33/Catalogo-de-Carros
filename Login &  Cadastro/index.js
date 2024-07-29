let btn = document.querySelector(' .bx-low-vision');

btn.addEventListener('click', () =>{
    let inputpassword = document.querySelector('#password')

    if(inputpassword.getAttribute('type')== 'password'){
        inputpassword.setAttribute('type','text')
    }else{
        inputpassword.setAttribute('type','password')

    }
})
function entrar() {
  let usuario = document.querySelector('#user');
  let usuarioLabel = document.querySelector('#userLabel');

  let senha = document.querySelector('#password');
  let senhaLabel = document.querySelector('#senhaLabel');

  let mgsError = document.querySelector('#mgsError');
  let listUser = [];

  let userValid = {
      nome: '',
      user: '',
      senha: ''
  };

  listUser = JSON.parse(localStorage.getItem('listuser')) || [];

  let isUserValid = false;

  listUser.forEach((item) => {
      if (usuario.value == item.userCad && senha.value == item.passwordCad) {
          userValid = {
              nome: item.nameCad,
              user: item.userCad,
              senha: item.passwordCad
          };
          isUserValid = true; 
      }
  })
  if (usuario.value == userValid.user && senha.value === passwordValid.senha) {
window.location.href='http://127.0.0.1:5500/index.html' 
let token = Math.random().toString(16);
console.log(token)
  } else {
      usuarioLabel.setAttribute('style','color:red');
      usuario.setAttribute('style','border-color: red');
      senhaLabel.setAttribute('style','color:red');
      senha.setAttribute('style','border-color: red');
      mgsError.setAttribute('style','display: block');
      mgsError.innerHTML = 'Usuário ou senha incorretos';
      usuario.focus();
  }
}

