'use strict';

const colorType = ['blue', 'pink', 'yellow'],
    clothingType = ['pants', 'skirt', 'tshirt'],
    sexType = ['female', 'male'],
    sizeType = ['large', 'small'];

let apparels = [];
    // numberOfapprels = colorType.length * clothingType.length * sexType.length * sizeType.length;
let apparelobj = new Object(),
    apparel = new Object();

function genRandom(list) {
    let randomNum = Math.floor(Math.random()*list.length);
    return randomNum;
}

function createApparelColor(colorType) {
    apparelobj.color = colorType[genRandom(colorType)];
}

function createApparelCT(clothingType) {
    apparelobj.type = clothingType[genRandom(clothingType)]; 
}

function createApparelSize(sizeType) {
    apparelobj.size = sizeType[genRandom(sizeType)]; 
}

function createApparelST(sexType) {
    apparelobj.sex = sexType[genRandom(sexType)]; 
}

function createApparel() {
    createApparelColor(colorType);
    createApparelCT(clothingType);
    createApparelSize(sizeType);
    createApparelST(sexType);
    return apparelobj;
}

function putApparel() {
    apparel = createApparel();
    apparels.push(apparel);
}

function createApparels() {
    for (let i = 0; i < 20; i++){
        createApparel();
        let newapparelobj = {};
        Object.assign(newapparelobj,apparelobj);
        apparels.push(newapparelobj);
    }
}

function init(){
    createApparels();
}

init();
