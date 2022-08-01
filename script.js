let a = '';
let b = '';
let sign = '';
let finish = false;
const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['—', '+', 'X', '/'];
const output = document.querySelector('.output');


function clearAll() {
  a = '';
  b = '';
  sign = '';
  finish = false;
  output.textContent = 0;
}

document.querySelector('.buttons').addEventListener('click', (evt) => {
  if (!evt.target.classList.contains('btn')) return;

  if (evt.target.classList.contains('ac')) {
    clearAll();
  }

  output.textContent = '0';
  const key = evt.target.textContent;

  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a += key;
      output.textContent = a;
    } else if (a !== '' && b !== '' && finish) {
      b = key;
      finish = false;
      output.textContent = b;
    } else {
      b += key;
      output.textContent = b;
    }
    return;
  }

  if (action.includes(key)) {
    sign = key;
    output.textContent = sign;
    return;
  }

  if (key === '=') {
    if (b === '') {
      b = a;
    }
    switch (sign) {
      case '+':
        a = (+a) + (+b);
        break;
      case '—':
        a = a - b;
        break;
      case 'X':
        a = a * b;
        break;
      case '/':
        if (b === '0') {
          output.textContent = 'Err';
          a = '';
          b = '';
          sign = '';
          return;
        }
        a = a / b;
        break;
    }
    finish = true;
    output.textContent = a;
  }
});