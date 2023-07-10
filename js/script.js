"use strict";

/*
*

11. Завдання зі статті https://uk.javascript.info/modifying-document (хто скільки зможе, завдання там є складні)*/

// #1 Створіть параграф в html і додайте
// в нього тест-рибу. Виведіть в консоль тільки сам текст.

/*const paragraph = document.querySelector('p')
console.log(paragraph.innerText)*/


// #2 Створити функцію, яка приймає як аргумент
// назву тега і повертає інформацію (у вигляді об'єкта)
// про тип вузла, про ім'я вузла і про кількість
// дочірніх вузлів (якщо дітей немає - 0).
// Для цього вузол має бути в html. nodeInfo('ul')

/*const nodeInfo = nodeTagName => {
	let node = document.querySelector(nodeTagName)
	return {
		tagName: node.tagName,
		nodeType: node.nodeType,
		amountOfChildren: node.children.length,
	}
}


console.log(nodeInfo('ul'))
console.log(nodeInfo('input'))*/


// #3 Напишіть функцію, яка приймає селектор,
// по якому можна знайти список ul, та повертає
// текстовий вмісту посилань усередині списку
// у вигляді масиву: getTextFromUl('.list')
// ---> ["Link1", "Link2", "Link3"]

/*const getTextFromUl = selector => {
	let list = Array.from(document.querySelectorAll(`${selector} > li > a`)).map(el => el.href)
	console.log(list)
/!*	let arr = []
	for (let item of list.children){
		arr.push(item.innerHTML)
	}
	console.log(arr)*!/
}*/

/*const getTextFromUl = selector => Array
	.from(document.querySelectorAll(`${selector} > li > a`))
	.map(el => el.textContent)


console.log(getTextFromUl('.list'))*/

// #4 Створіть кнопку за допомогою JavaScript
// і задайте їй атрибут data-color зі значенням
// "red". Виведіть її першим елементом в body.
// Потім виведіть значення цього атрибута в консоль.

/*const customBtn = document.createElement('button')
customBtn.setAttribute('data-color', 'red')

document.body.prepend(customBtn)
console.log(customBtn.dataset.color)*/

// #5 Створіть список <ul> з трьома елементами <li>.
// Встановіть для кожного елемента атрибут data-index
// з відповідними значеннями 1, 2, 3. Потім виведіть
// значення атрибута data-index для кожного елемента списку в консоль.

/*const customUl = document.createElement("ul")

for (let i = 1; i <= 3; i++) {
	customUl.innerHTML += `<li data-index="${i}">${i}</li>`
}

document.body.prepend(customUl)

for (let item of customUl.children) {
	console.log(item.dataset.index)
}*/

// #6 Створіть список <ul> з елементами <li>.
// За допомогою властивості hidden зробіть
// другий елемент списку невидимим.

/*const customUl = document.createElement('ul')
for (let i = 0; i < 6; i++)
	customUl.innerHTML += `<li>Lorem #${i}</li>`

document.body.prepend(customUl)

function hideSecondElem(list) {
	list.children[1].hidden = true
}

setTimeout(hideSecondElem, 1000, customUl)*/


/*const list = document.querySelector('.list')
list.children[1].hidden = true*/

// #7 Створіть зображення <img> із початковим атрибутом src.
// Через 3 секунди змініть значення властивості src на інше
// зображення і переконайтеся, що зображення оновлюється на сторінці.

/*const customImg = document.createElement('img')

customImg.src = "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcQkrjYxSfSHeCEA7hkPy8e2JphDsfFHZVKqx-3t37E4XKr-AT7DML8IwtwY0TnZsUcQ"

document.body.append(customImg)

function changeImg(elem) {
	elem.src = "https://www.thesprucepets.com/thmb/hxWjs7evF2hP1Fb1c1HAvRi_Rw0=/2765x0/filters:no_upscale():strip_icc()/chinese-dog-breeds-4797219-hero-2a1e9c5ed2c54d00aef75b05c5db399c.jpg"
}

setTimeout(changeImg,3000,customImg)*/


// #8 Створіть посилання <a> з атрибутом.
// Змініть значення властивості target
// на _blank і переконайтеся, що посилання
// відкривається в новій вкладці.


/*const customA = document.createElement('a')
customA.href = 'https://www.google.com.ua/webhp?source=search_app&gfe_rd=cr&ei=zqR0VLboN8WH8QffxICQDQ&gws_rd=ssl'
customA.innerText = "link"
customA.target = '_blank'
document.body.append(customA)*/

// #9 Всі завдання зі статті https://uk.javascript.info/dom-attributes-and-properties
// #9.1

/*const items = document.querySelectorAll('[data-widget-name]')

for (let item of items){
	console.log(item.dataset.widgetName)
}*/

// #9.2
/*const linkList = document.querySelectorAll('.link-list > li > a')
for (let item of linkList)
	if (item.textContent.includes('://') && !item.textContent.startsWith('http://internal.com'))
		item.style.color = 'orange'*/


// #10 Створіть свій кастомний alert зі стилями,
// які подобаються. Html використовувати не можна.
// Alert має з'явитись через секунду після оновлення
// сторінки і пропасти через 3 секунди.


let customAlert = document.querySelector('.alert__window')
let customAlertWrapper = document.querySelector('.alert__wrapper')

const customCreatedAlertWrapper = document.createElement('div')
customCreatedAlertWrapper.classList.add('alert__wrapper')

const customCreatedAlert = document.createElement("div")
customCreatedAlert.classList.add('alert__window', 'alert__window_inactive')

const customCreatedAlertText = document.createElement('p')
customCreatedAlertText.classList.add('alert__text')
customCreatedAlertText.innerText = 'Some alert text'

customCreatedAlert.append(customCreatedAlertText)
customCreatedAlertWrapper.append(customCreatedAlert)

document.body.append(customCreatedAlertWrapper)

function switchAlert() {
	customCreatedAlert.classList.toggle('alert__window_inactive')
	customCreatedAlert.classList.toggle('alert__window_active')
	customCreatedAlertWrapper.classList.toggle('alert__wrapper__active')
}

setTimeout(switchAlert, 1000)
setTimeout(switchAlert, 4000)

