'use strict';

const name = "toukir"
const age = 23



const toukir = `I'm ${name} a ${age} year old student`
console.log(toukir)



const agebaby = 14;

if(agebaby >= 18){
     console.log(`toukir can start driving lincese`);
}else{
    console.log(`toukir have to wait for ${18 - agebaby} years`);
}




// ---------------------------------------->//

function toukiSolanki(){
    console.log('my name is toukiSolanki');
}

toukiSolanki();

function fruitProcess(apples, organes){
    console.log(apples, organes);
    const juice = `Juice with ${apples} apples & ${organes} oragnes`
    return juice;
}


const save = fruitProcess(5,0)
console.log(save);


function calcAge1(bithyear){
    return 2024-bithyear;
}

console.log(calcAge1(1999));


const frined1 = 'tik'
const frined2 = 'tikbig'
const frined3 = 'tiksmall'


const friends = ['tik', 'steven', 'peter']

console.log(friends);




for (let rep = 1; rep <=10; rep++ ){
    console.log(`lifiing weights reptioon ${rep}`);
}