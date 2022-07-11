// 1) сделать, чтобы при нажатии на кнопку, переключался её цвет с красного на зеленый

// 2) * переключать цвет на противоположный

// 3) сделать калькулятор, используя функцию, которую мы написали (3 инпута, кнопка “=” и результат)


// Task 1
const $btn = document.querySelector('#once');
const changeBtnColorOnlyOnce = () => {
  $btn.classList.add('green-btn');
}
$btn.addEventListener('click', changeBtnColorOnlyOnce);


// Task 2
const $btn2 = document.querySelector('#toggle');
const changeBtnColorAllTheTime = () => {
  $btn2.classList.toggle('green-btn');
}
$btn2.addEventListener('click', changeBtnColorAllTheTime);


// Task 3
// Optimal solution
const actions = {
  '+': (number1, number2) => number1 + number2,
  '-': (number1, number2) => number1 - number2,
  '*': (number1, number2) => number1 * number2,
  '/': (number1, number2) => (number2 === 0 ? 'Error' : number1 / number2),
  '%': (number1, number2) => number1 % number2,
  '**': (number1, number2) => number1 ** number2,
}

const calc = () => {
  const $number1 = +document.querySelector('#number_1').value;
  const $number2 = +document.querySelector('#number_2').value;
  const $action = document.querySelector('#action').value;

  if (actions[$action]) {
    return document.querySelector('#result').innerText = actions[$action]($number1, $number2);
  }

  return document.querySelector('#result').innerText = 'Error invalid operator';
}

const $submit = document.querySelector('#submit').addEventListener('click', calc);



// Other options for solving Task 3

// Solution using SWITCH
// const calc = () => {
//   const $number1 = +document.querySelector('#number_1').value;
//   const $number2 = +document.querySelector('#number_2').value;
//   const $action = document.querySelector('#action').value;

//   switch ($action) {
//     case '+':
//       return document.querySelector('#result').innerText = $number1 + $number2;
//     case '-':
//       return document.querySelector('#result').innerText = $number1 - $number2;
//     case '*':
//       return document.querySelector('#result').innerText = $number1 * $number2;
//     case '/':
//       return document.querySelector('#result').innerText = ($number2 === 0 ? 'Error' : $number1 / $number2);
//     case '%':
//       return document.querySelector('#result').innerText = $number1 % $number2;
//     case '**':
//       return document.querySelector('#result').innerText = $number1 ** $number2;
//     default:
//       return document.querySelector('#result').innerText = 'Error invalid operator';
//   }
// }

// const $submit = document.querySelector('#submit').addEventListener('click', calc);



// Solution using SWITCH alternative
// const calc = () => {
//   const $number1 = +document.querySelector('#number_1').value;
//   const $number2 = +document.querySelector('#number_2').value;
//   const $action = document.querySelector('#action').value;

//   switch ($action) {
//     case '+':
//       document.querySelector('#result').innerText = $number1 + $number2;
//       break;
//     case '-':
//       document.querySelector('#result').innerText = $number1 - $number2;
//       break;
//     case '*':
//       document.querySelector('#result').innerText = $number1 * $number2;
//       break;
//     case '/':
//       document.querySelector('#result').innerText = ($number2 === 0 ? 'Error' : $number1 / $number2);
//       break;
//     case '%':
//       document.querySelector('#result').innerText = $number1 % $number2;
//       break;
//     case '**':
//       document.querySelector('#result').innerText = $number1 ** $number2;
//       break;
//     default:
//       document.querySelector('#result').innerText = 'Error invalid operator';
//   }
// }

// const $submit = document.querySelector('#submit').addEventListener('click', calc);



// Solution using IF-ELSE
// const calc = () => {
//   const $number1 = +document.querySelector('#number_1').value;
//   const $number2 = +document.querySelector('#number_2').value;
//   const $action = document.querySelector('#action').value;

//   if ($action === '+') {
//     document.querySelector('#result').innerText = $number1 + $number2;
//   } else if ($action === '-') {
//     document.querySelector('#result').innerText = $number1 - $number2;
//   } else if ($action === '*') {
//     document.querySelector('#result').innerText = $number1 * $number2;
//   } else if ($action === '/') {
//     document.querySelector('#result').innerText = ($number2 === 0 ? 'Error' : $number1 / $number2);
//   } else if ($action === '%') {
//     document.querySelector('#result').innerText = $number1 % $number2;
//   } else if ($action === '**') {
//     document.querySelector('#result').innerText = $number1 ** $number2;
//   } else {
//     document.querySelector('#result').innerText = 'Error invalid operator';
//   }
// }

// const $submit = document.querySelector('#submit').addEventListener('click', calc);