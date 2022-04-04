// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);
}
q1();
// prediction: a = 3

//#2
var a = 0;
function q2() {
    a = 5;
}
q2();
// prediction: a = 5


function q22() {
    alert(a);
}
q22();
// prediction: a = 5


//#3
function q3() {
    window.a = "hello";
}
q3();
// // prediction: a = "hello"

function q32() {
    alert(a);
}
q32();
// prediction: a = "hello"

// //#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}
q4();
// // prediction: a = "test"

// //#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

// prediction: a = 5
// prediction: a = 5
