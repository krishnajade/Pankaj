function pankaj(){
    var a = document.getElementById("name").value;
    var b = document.getElementById("email").value;
    var c = document.getElementById("phone").value;

    document.getElementById("name1").innerHTML=a;
    document.getElementById("email1").innerHTML=b;
    document.getElementById("phone1").innerHTML=c;

/* row1 */
    var d1 = document.getElementById("sr1").value;
    var d2 = document.getElementById("item1").value;
    var d3 = document.getElementById("price1").value;
    var d4 = document.getElementById("qty1").value;

    document.getElementById("sr11").innerHTML=d1;
    document.getElementById("item11").innerHTML=d2;
    document.getElementById("price11").innerHTML=d3;
    document.getElementById("qty11").innerHTML=d4;

/* row2 */
    var e1 = document.getElementById("sr2").value;
    var e2 = document.getElementById("item2").value;
    var e3 = document.getElementById("price2").value;
    var e4 = document.getElementById("qty2").value;

    document.getElementById("sr22").innerHTML=e1;
    document.getElementById("item22").innerHTML=e2;
    document.getElementById("price22").innerHTML=e3;
    document.getElementById("qty22").innerHTML=e4;
/* row3 */
var f1 = document.getElementById("sr3").value;
var f2 = document.getElementById("item3").value;
var f3 = document.getElementById("price3").value;
var f4 = document.getElementById("qty3").value;

document.getElementById("sr33").innerHTML=f1;
document.getElementById("item33").innerHTML=f2;
document.getElementById("price33").innerHTML=f3;
document.getElementById("qty33").innerHTML=f4;

var d5=d3*d4;
var d6=e3*e4;
var d7=f3*f4;
var d8=d5+d6+d7;
var d9=d8*.18;
var d10=d8+d9;
document.getElementById("total11").innerHTML=d5;
document.getElementById("total22").innerHTML=d6;
document.getElementById("total33").innerHTML=d7;
document.getElementById("subtotal").innerHTML=d8;
document.getElementById("gst").innerHTML=d9;
document.getElementById("total").innerHTML=d10;






}