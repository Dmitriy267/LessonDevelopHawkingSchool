//Удалить из массива дубликаты
const arr=[1,2,3,5,1,6,2,5,6,7];

const arr1=[...new Set(arr)]
console.log(arr1)
//2. Объединить два объекта в один
const obj1={id:1, name:'userName'};
const obj2={id:1, password:'qwerty'};

const obj3={...obj1, ...obj2}

console.log(obj3);

//3. Сократить объявление функции в одну строку
const add=(x,y)=>x+y;
console.log(add(2,3));

//4. Написать функцию, с которой можно выполнять различные действия с задержкой в 5 секунд
const sleep=ms=>{
    return new Promise(function(resolve, reject){
      setTimeout(()=>resolve('value'), ms)
    })
  }
  sleep(5000).then(()=>{
    console.log('Выполнилось через 5 секунд')
  })

