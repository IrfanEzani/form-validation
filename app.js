
const container = document.querySelector('.container')
const header = document.querySelector('.header')
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
  e.preventDefault()
  check()
})

function check() {
  const userVal = username.value.trim();
    const emailVal= email.value.trim();
    const pass1Val = password.value.trim();
    const pass2Val = password2.value.trim();

    if(userVal === "") {
      setError(username, 'Please fill in the form')
    } else {
      successFor(username)
    }

    if(emailVal === '') {
  setError(email, 'Please fill in the form');
} else if (!isEmail(emailVal)) {
  setError(email, 'Not a valid email');
} else {
  successFor(email);
}

if(pass1Val === '') {
  setError(password, 'Please fill in in the form');
} else if (pass1Val.length <= 8) {
  setError(password, "Password must be more than 8 characters")
} else {
  successFor(password);
}

if(pass2Val === '') {
  setError(password2, 'No password detected');
} else if(pass1Val !== pass2Val) {
  setError(password2, 'Passwords does not match');
} else{
  successFor(password2);
}

if (emailVal !== "" && userVal !== "" && pass1Val !== "" && pass1Val === pass2Val) {
  console.log('dope');
  container.innerHTML = "";
  container.innerHTML = `

  <div class="thanks">
    <h1>Thank you for signing in.</h1>
      <button><a href="#">Enroll the course now</a></button>

    <div class="image-container">
      <img src="thanks.svg" alt="" height="200px">
    </div>`;
}

}

function setError(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small')
  small.innerText = message;
  formControl.className = 'form-control error'
}

function successFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success'
}


function isEmail(email) {
return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
