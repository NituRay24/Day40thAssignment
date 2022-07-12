var a = "Mayra";
console.log(a);
var a = "Amrita";

func();
// Functions with same name allowed in javascript,
// Latter declaration overrides the earlier one
function func(){
    console.log("First function.");
}
function func(){
    console.log("Second function.");
}
