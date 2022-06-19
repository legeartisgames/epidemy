epButton = document.querySelector('.epidemy-form-button');
//alternative variant: input = document.querySelector('#epidemy-input');
input = document.getElementById('epidemy-input');
formField = document.querySelector('#form-field');
epButton.onclick = function(){
  if (input.value!='') {
  console.log(input.value);
  input.value = '';
  console.log('Your review is registered!');
  let infoSent = document.createElement('p');
  infoSent.innerText = "Your review was sent! Thanks!";
  //formParent = input.parentElement;
  formField.innerHTML = '';
  formField.append(infoSent);
  //epButton.remove();
  //input.remove();
  }
}