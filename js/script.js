'use strict';
const box = document.getElementById('box');

// получаем html коллекцию из buttons (псевдомассив)

const btns = document.getElementsByTagName('button');

// из прошлой псевдоколлекции выбираем вторую кнопку button

//const btns = document.getElementsByTagName('button')[1];

// или так использовать конкретную кнопку

// console.log(btns[1]); 

const circles = document.getElementsByClassName('circle');

//console.log(circles);

//выбрать элемент по ccs селектору
// получаем коллекцию

const hearts = document.querySelectorAll('.heart');

/*hearts.forEach(item =>{
    console.log(item);
});*/

// получаем первый элемент

//const oneHeart = document.querySelector('.heart');



//box.style.backgroundColor = 'blue';
//box.style.width = "500px";

// или так можно написать =>

box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

//for (let i = 0; i < hearts.length; i++){
//    hearts[i].style.backgroundColor = 'blue';
//};

//или так

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
const text = document.createTextNode('Тут был я');

div.classList.add('black');

const wrapper = document.querySelector('.wrapper');

//document.body.append(div);
// пока не объявлен wrapper через const document.querySelector('.wrapper').append(div);

wrapper.append(div); //добавляет в конец

// wrapper.prepend(div); // добавляет в начало родителя


//hearts[0].before(div); // перед каким элементом будет стоять div -  перед hearts

//hearts[0].after(div); // после какого элемента будет стоять div -  после hearts

//circles[0].remove(); // удалить элемент 

//hearts[1].replaceWith(circles[0]); //замена элемента на другой


//старый код 

//wrapper.appendChild(div);

//wrapper.insertBefore(div, hearts[0]);//установка элемента перед чем-то

//wrapper.removeChild(hearts[1]); //удаление элемента

//wrapper.removeChild(circles[0], hearts[0]);// hearts[1] вместо circles[0]



//div.innerHTML = 'hello world'; //добавляем текст в див

div.innerHTML = '<h1>hello world</h1>';

//div.textContent ='hello'; // нельзя внести <h1>, просто текст

div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');