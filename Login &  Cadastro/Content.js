
let btn = document.querySelector('#verSenha');
let btnconfirm = document.querySelector('#verconfirmesenha');


let name = document.querySelector('#name');
let LabelName = document.querySelector('#LabelName');
let ValidName = false;

let user = document.querySelector('#user');
let LabelUser = document.querySelector('#LabelUser');
let ValidUser = false;

let password = document.querySelector('#password');
let LabelPassword = document.querySelector('#LabelPassword');
let ValidPassword = false;

let confirmpassword = document.querySelector('#confirmpassword');
let Labelconfirmpassword = document.querySelector('#Labelconfirmpassword');
let ValiPasswordConfirm = false;

let mgsError = document.querySelector('#mgsError');
let mgsSucess = document.querySelector('#mgsSucess')

name.addEventListener('keyup', () =>{
   if(name.value.length <=2){
      LabelName.setAttribute('style', 'color:red');
      LabelName.innerHTML ='Name *Insira no minimo 3 caracteres'
      name.setAttribute('style','border-color: red')
       ValidName = false;
   }else{
      LabelName.setAttribute('style','color:green');
      LabelName.innerHTML ='Name'
      name.setAttribute('style','border-color: green')
      ValidName = true;
   }
})

user.addEventListener('keyup', () =>{
   if(user.value.length <=3){
      LabelUser.setAttribute('style', 'color:red');
      LabelUser.innerHTML ='User *Insira no minimo 4 caracteres'
      user.setAttribute('style','border-color: red')
      let ValidUser = false;
   }else{
      LabelUser.setAttribute('style','color:green');
      LabelUser.innerHTML ='User'
      user.setAttribute('style','border-color: green')
      ValidUser = true;
   }
})

password.addEventListener('keyup', () =>{
   if(password.value.length <=5){
      LabelPassword.setAttribute('style', 'color:red');
      LabelPassword.innerHTML ='Password *Insira no minimo 6 caracteres'
      password.setAttribute('style','border-color: red')
      ValidPassword = false
   }else{
      LabelPassword.setAttribute('style','color:green');
      LabelPassword.innerHTML ='Password'
      password.setAttribute('style','border-color: green')
      ValidPassword = true
   }
})

confirmpassword.addEventListener('keyup', () =>{
   if(password.value != confirmpassword.value){
      Labelconfirmpassword.setAttribute('style', 'color:red');
      Labelconfirmpassword.innerHTML ='Confirm Password *As senhas não conferem'
   confirmpassword.setAttribute('style','border-color: red')
   ValiPasswordConfirm = false;
   }else{
      Labelconfirmpassword.setAttribute('style','color:green');
      Labelconfirmpassword.innerHTML =' Confirm Password'
      confirmpassword.setAttribute('style','border-color: green')
      ValiPasswordConfirm = true;
   }
})

function cadastrar(){
   if(ValidName && ValidUser && ValidPassword && ValiPasswordConfirm){
    let listUser = JSON.parse(localStorage.getItem('listUser') || '[]')

    listUser.push(
      {
         nameCad: name.value,
         userCad: user.value,
         passwordCard: password.value

      }
    )
    localStorage.setItem('listuser', JSON.stringify(listUser))

         mgsSucess.setAttribute('style','display: block')
         mgsSucess.innerHTML = '<strong>Cadastrado Usuário...</strong>'
         mgsError.innerHTML = ''
         mgsError.setAttribute('style','display: none')

   setTimeout(() =>{
   window.location.href ='http://127.0.0.1:5500/Login%20&%20%20Cadastro/Login.html'
   }, 3000)
   
   }else{
      mgsError.setAttribute('style','display: block')
        mgsError.innerHTML = '<strong>Preencha todos o campos corretamente antes de  cadastrar</strong>'
        mgsSucess.innerHTML = ''
        mgsSucess.setAttribute('style','display: none')
   }
}

btn.addEventListener('click', () =>{
    let inputpassword = document.querySelector('#password')

    if(inputpassword.getAttribute('type')== 'password'){
        inputpassword.setAttribute('type','text')
    }else{
        inputpassword.setAttribute('type','password')

    }
})
btnconfirm.addEventListener('click', () =>{
    let inputpasswordconfirm = document.querySelector('#confirmpassword')

    if(inputpasswordconfirm.getAttribute('type')== 'password'){
        inputpasswordconfirm.setAttribute('type','text')
    }else{
        inputpasswordconfirm.setAttribute('type','password')

    }
})





