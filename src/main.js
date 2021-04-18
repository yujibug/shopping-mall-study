'use strict'
const btnBox = document.querySelector(".btnBox"),
    tBtn = btnBox.querySelector(".tBtn"),
    pBtn = btnBox.querySelector(".pBtn"),
    sBtn = btnBox.querySelector(".sBtn"),
    blueBtn = btnBox.querySelector(".blueBtn"),
    yellowBtn = btnBox.querySelector(".yellowBtn"),
    pinkBtn = btnBox.querySelector(".pinkBtn"),
    mainBtn = document.querySelector(".mainBtn"),
    ul = document.querySelector(".items");

const SHOWING = "showing"
let itemIndex = 1;
const itemNumber = apparels.length;

function loadItem(obj) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const itemIcon = new Image();
    itemIcon.src = `./img/${obj.color}_${obj.type[0]}.png`;
    span.innerText = `${obj.sex}, ${obj.size} size`;
    li.appendChild(itemIcon);
    li.appendChild(span);
    ul.appendChild(li);
    li.classList.add(`item${itemIndex}`);
    itemIndex++;
}

function showAll() {
    const li = document.querySelectorAll("li");
    for (let i = 0; i < itemNumber; i++) {
        li[i].classList.add(SHOWING);
    }
}

function reset(tL,pL,sL,bL,yL,piL) {
    const li = document.querySelectorAll("li");
    for (let i = 0; i < itemNumber + tL + pL + sL + bL + yL + piL; i++) {
        li[i].classList.remove(SHOWING);
    }
}

function showCategory(tL,pL,sL,bL,yL,piL) {
    const li = document.querySelectorAll("li");

    mainBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        showAll();
    });
    
    tBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        for (let i = (itemNumber); i < (itemNumber + tL); i++) {
            li[i].classList.add(SHOWING);
        } 
    });
    pBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        for (let i = (itemNumber + tL); i < (itemNumber + tL + pL); i++) {
            li[i].classList.add(SHOWING);
        }
    });
    sBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        for (let i = (itemNumber + tL + pL); i < (itemNumber + tL + pL + sL); i++) {
            li[i].classList.add(SHOWING);
        }
    });
    blueBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        for (let i = (itemNumber + tL + pL + sL); i < (itemNumber + tL + pL + sL + bL); i++) {
            li[i].classList.add(SHOWING);
        }
    });
    yellowBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        for (let i = (itemNumber + tL + pL + sL + bL); i < (itemNumber + tL + pL + sL + bL + yL); i++) {
            li[i].classList.add(SHOWING);
        }
    });
    pinkBtn.addEventListener('click', event => {
        reset(tL,pL,sL,bL,yL,piL);
        for (let i = (itemNumber + tL + pL + sL + bL + yL); i < (itemNumber + tL + pL + sL + bL + yL + piL); i++) {
            li[i].classList.add(SHOWING);
        }
    });
}

function createList() {
    apparels.forEach(list => loadItem(list));

    let tshirtList = apparels.filter(apparels => apparels.type === "tshirt");
    tshirtList.forEach(list => loadItem(list));
    let pantsList = apparels.filter(apparels => apparels.type === "pants");
    pantsList.forEach(list => loadItem(list));
    let skirtList = apparels.filter(apparels => apparels.type === "skirt");
    skirtList.forEach(list => loadItem(list));
    let blueList = apparels.filter(apparels => apparels.color === "blue");
    blueList.forEach(list => loadItem(list));
    let yellowList = apparels.filter(apparels => apparels.color === "yellow");
    yellowList.forEach(list => loadItem(list));
    let pinkList = apparels.filter(apparels => apparels.color === "pink");
    pinkList.forEach(list => loadItem(list));

    const tL = tshirtList.length,
        pL = pantsList.length,
        sL = skirtList.length,
        bL = blueList.length,
        yL = yellowList.length,
        piL = pinkList.length;

    showCategory(tL,pL,sL,bL,yL,piL);
}

function init() {
    createList();
    showAll();
    showCategory();
}

init();