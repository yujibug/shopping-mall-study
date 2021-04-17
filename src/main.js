'use strict'
const btnBox = document.querySelector(".btnBox"),
    tBtn = btnBox.querySelector(".tBtn"),
    pBtn = btnBox.querySelector(".pBtn"),
    sBtn = btnBox.querySelector(".sBtn"),
    blueBtn = btnBox.querySelector(".blueBtn"),
    yellowBtn = btnBox.querySelector(".yellowBtn"),
    pinkBtn = btnBox.querySelector(".pinkBtn"),
    ul = document.querySelector(".items");
// items = itemList.querySelector(".item");

// let categoryList = [];

function loadItem(itemList) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const itemIcon = new Image();
    itemIcon.src = `./img/${itemList.color}_${itemList.type[0]}.png`;
    span.innerText = `${itemList.sex}, ${itemList.size} size`;
    li.appendChild(itemIcon);
    li.appendChild(span);
    li.classList.add("item");
    ul.appendChild(li);
}

function loadcategory() {
    tBtn.addEventListener('click', event => {
        let categoryList = apparels.filter(apparels => apparels.type === "tshirt");
        console.log(categoryList);
        // loadItem(categoryList);
    });
    pBtn.addEventListener('click', event => {
        let categoryList = apparels.filter(apparels => apparels.type === "pants");
        loadItem(categoryList);
    });
    sBtn.addEventListener('click', event => {
        let categoryList = apparels.filter(apparels => apparels.type === "skirt");
        loadItem(categoryList);
    });
    blueBtn.addEventListener('click', event => {
        let categoryList = apparels.filter(apparels => apparels.color === "blue");
        loadItem(categoryList);
    });
    yellowBtn.addEventListener('click', event => {
        let categoryList = apparels.filter(apparels => apparels.color === "yellow");
        loadItem(categoryList);
    });
    pinkBtn.addEventListener('click', event => {
        let categoryList = apparels.filter(apparels => apparels.color === "pink");
        loadItem(categoryList);
    });
}

function init() {
    apparels.forEach(apparels => loadItem(apparels));
    loadcategory();
}

init();
console.log(categoryList);