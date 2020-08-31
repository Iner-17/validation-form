document.addEventListener("DOMContentLoaded", () => {
  //input variables
  const fname = document.querySelector("#fname");
  const mnumber = document.querySelector("#mnumber");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");
  const cpass = document.querySelector("#cpass");
  //inputs error variables
  let fnameError = document.querySelector(".fname-error");
  let mnumberError = document.querySelector(".mnumber-error");
  let emailError = document.querySelector(".email-error");
  let passwordError = document.querySelector(".password-error");
  let cpassError = document.querySelector(".cpass-error");

  fname.addEventListener("keyup", () => {
    let regex = /^[a-zA-Z ]+$/;
    if (regex.test(fname.value)) {
      fnameError.textContent = ''
    } else {
      fnameError.textContent = 'please input a valid name';
    }
  });

  mnumber.addEventListener("keyup", () => {
    let regex = /^[0-9]{11}$/;
    if (regex.test(mnumber.value)) {
      mnumberError.textContent = ''
    } else {
      mnumberError.textContent = 'please input a valid phone number';
    }
  });

  email.addEventListener("keyup", () => {
    let regex = /^[a-zA-Z0-9._]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email.value)) {
      emailError.textContent = ''
    } else {
      emailError.textContent = 'please input a valid email ';
    }
  });

  password.addEventListener("keyup", () => {
    let regex = /^[a-zA-Z0-9]{6,50}$/;
    if (regex.test(password.value)) {
      passwordError.textContent = ''
    } else {
      passwordError.textContent = 'password must contain above 6 and below 5 char, no SPECIAL CHAR';
    }
  });

  cpass.addEventListener("keyup", () => {
    let regex = /^[a-zA-Z0-9]{6,50}$/;
    if (cpass.value === password.value) {
      if (regex.test(cpass.value)) {
        cpassError.textContent = ''
      } else {
        cpassError.textContent = 'please check your password';
      }
    } else {
      cpassError.textContent = 'please check your password';
    }
  });
});