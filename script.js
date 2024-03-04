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
