document.addEventListener("DOMContentLoaded", function () {
    console.log("страница загрузилась");
    const divContainer = document.querySelector('div.container');
    const btnEl = document.createElement('button');
    divContainer.appendChild(btnEl);
    btnEl.innerHTML = "Button";
    btnEl.onclick = () => console.log("событие onclick");
    btnEl.addEventListener('click', function (e) {
        console.log("событие addEventListener");
    });

    const btn1 = document.createElement('button');
    const btn2 = document.createElement('button');
    const btn3 = document.createElement('button');
    btn1.innerHTML = "Button 1";
    btn2.innerHTML = "Button 2";
    btn3.innerHTML = "Button 3";
    divContainer.appendChild(btn1);
    divContainer.appendChild(btn2);
    divContainer.appendChild(btn3);
    let clickFunc = function (e) {
        console.log(e.target.innerHTML);
    };
    btn1.addEventListener('click', clickFunc);
    btn2.addEventListener('click', clickFunc);
    btn3.addEventListener('click', clickFunc);
    const btn4 = document.createElement('button');
    btn4.innerHTML = "Button 4";
    divContainer.appendChild(btn4);
    let counter = 0;
    btn4.addEventListener('click', function (e) {
        counter++;
        console.log(`counter = ${counter}`);
    });
    const btn5 = document.createElement('button');
    btn5.innerHTML = "Button 5";
    divContainer.appendChild(btn5);
    btn5.addEventListener('click', function (e) {
        e.target.innerHTML = "Вы нажали на эту кнопку";
    });
});

const btn1 = document.createElement('button');
const btn2 = document.createElement('button');
btn1.innerHTML = "Button 1";
btn2.innerHTML = "Button 2";
divContainer.appendChild(btn1);
divContainer.appendChild(btn2);
btn1.addEventListener('click', function (e) {
    const title1 = document.createElement('h1');
    title1.innerHTML = "Новый заголовок";
    divContainer.appendChild(title1);
});
btn2.addEventListener('click', function (e) {
    const titles = document.querySelectorAll('h1');
    if (titles.length > 0) {
        titles[titles.length - 1].remove();
    }
});
const btn3 = document.createElement('button');
btn3.innerHTML = "Button 3";
divContainer.appendChild(btn3);
btn3.addEventListener('mouseover', function (e) {
    console.log("вы навели на данную кнопку");
});
btn3.addEventListener('mouseleave', function (e) {
    console.log("Наведения на кнопку больше нет");
});

const addBtn = document.createElement('button');
divContainer.appendChild(addBtn);
addBtn.innerHTML = "add li";
const ulEl = divContainer.querySelector('ul');
addBtn.addEventListener('click', function (e) {
    const liEl = document.createElement('li');
    liEl.innerHTML = "новый элемент списка";
    ulEl.appendChild(liEl);
});

const delBtn = document.createElement('button');
divContainer.appendChild(delBtn);
delBtn.innerHTML = "del first li";
delBtn.addEventListener('click', function (e) {
    const listLi = ulEl.querySelectorAll('li');
    if (listLi.length > 0) {
        listLi[0].remove();
    }
});

const classBtn = document.createElement('button');
divContainer.appendChild(classBtn);
classBtn.innerHTML = "add class";
classBtn.addEventListener('click', function (e) {
    e.target.classList.add("click");
});