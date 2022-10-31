const input = document.querySelector('.input')
const result = document.querySelector('.result');
const error = document.querySelector('.error')

input.addEventListener('input', inputEnter)
function inputEnter(num) {
   let str = input.value;
   num = Number(str);
   try {
      if (!isNaN(str) && num <= 10 && num >= 5 && str !== '') {
         console.log('Правильно')
         result.textContent = 'Правильно введеное число';
         result.classList.remove('error');
         result.classList.add('result');

      } else {
         throw new Error('Число введено не правильно')

      }
      return result.textContent;


   } catch (err) {
      console.log(err.message);
      result.classList.add('error');
      result.classList.remove('result');
      result.textContent = `${err.message}`

   }

}