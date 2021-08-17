import _ from 'lodash';

console.log('GVC Project Success!!');

console.log(_.camelCase('GVC Project Success!!'));

let boxEl = document.querySelector('.box');

console.log(boxEl);

boxEl.addEventListener('click', function(){
  console.log('Click!!!');
  boxEl.classList.add('active');
  console.log(
    boxEl.classList.contains('active')
  );
});
const a = boxEl.textContent;
console.log(a);

const b = a.split('').reverse().join('');
console.log(b);


