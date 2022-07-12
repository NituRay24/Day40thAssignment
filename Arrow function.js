function valcDist(speed,time)
{
    console.log(speed*time)
}
//let distance = calcDist(12,3);
//console.log(distance);
calcDist(12,4);
// Javascript Arrow


 // JS calDist function
 function calcDist( speed,  time){
    let distance = speed * time;
    return distance;
}
let distance = ( speed, time) => {
    return speed * time;
};

console.log(distance(12,7));
// Arrow function , single parameter
let square = num => { console.log(num * num);};
//console.log(`Square of 5:  ${square(5)}`);
square(25);


//Arrow function, zero parameter
var printState = () => {console.log("My state is Sikkim");};
printState();

var printState1 = () => {return "My state is Sikkim";};
//console.log(printState()); // will return undefined
console.log(printState1());




function checkBackTick(num){
    console.log(`value of num square: ${num * num}`);
}
//checkBackTick(5);