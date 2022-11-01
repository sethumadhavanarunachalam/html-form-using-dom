function createlabel(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function createinput(tagname,attrname,attrvalue){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
function linebreak(tagname){
    var ele = document.createElement(tagname);
    return ele;
}
var form = createinput("form","action","onsubmit");
var div = createinput("div","class","form");
var label1 = createlabel("label","for","firstname","Firstname:");
var input1 = createinput("input","id","firstname");
var br1 = linebreak("br");
var br2 = linebreak("br");
var label2 = createlabel("label","for","middlename","Middlename:");
var input2 = createinput("input","id","middlename");
var label3 = createlabel("label","for","lastname","Lastname:");
var input3 = createinput("input","id","lastname");
var label4 = createlabel("label","for","address","Address:");
var input4 = createinput("input","id","address");
var label5 = createlabel("label","for","pincode","Pincode:");
var input5 = createinput("input","id","pincode");
var label6 = createlabel("label","for","gender","Gender:");
var input6 = createinput("input","id","gender");
var label7 = createlabel("label","for","state","State:");
var input7 = createinput("input","id","state");
var label8 = createlabel("label","for","country","Country:");
var input8 = createinput("input","id","country");

var br3 = linebreak("br");
var br4 = linebreak("br");
var br5 = linebreak("br");
var br6 = linebreak("br");
var br7 = linebreak("br");
var br8 = linebreak("br");
var br9 = linebreak("br");
var br10 = linebreak("br");
var br11 = linebreak("br");
var br12 = linebreak("br");
var br13 = linebreak("br");
var br14 = linebreak("br");
var br15 = linebreak("br");
div.append(label1,br1,input1,br2,label2,br3,input2,br4,label3,br5,input3,br6,label4,br7,input4,br8,label5,br9,input5,br10,label6,br11,input6,br12,label7,br13,input7,br14,label8,br15,input8);
form.append(div);
document.body.append(form); 
function foo(){
    
    var pin1 = document.getElementById("firstname").value;
    var pin2 = document.getElementById("middlename").value;
    var pin3 = document.getElementById("lastname").value;
    var pin4 = document.getElementById("address").value;
    var pin5 = document.getElementById("pincode").value;
    var pin6 = document.getElementById("gender").value;
    var pin7 = document.getElementById("country").value;
    var pin8 = document.getElementById("state").value;
    console.log("Firstname=",pin1,"Middlename=",pin2,"Lastname=",pin3,"Address=",pin4,"Pincode=",pin5,"Gender=",pin6,"State=",pin7,"Country=",pin8);
}

function tabel(tagname,attrname,attrvalue){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
function tabeldata(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content;
    return ele;
}
function tag(tagname){
    var ele = document.createElement(tagname);
    return ele;
}

var tabel1 = tabel("table","class","table");
var thead = tabel("thead","class","thead-dark");
var tr1 = tag("tr");
var th1 = tabeldata("th","scope","col","Firstname");
var th2 = tabeldata("th","scope","col","Middlename");
var th3 = tabeldata("th","scope","col","Lastname");
var th4 = tabeldata("th","scope","col","Address");
var th5 = tabeldata("th","scope","col","Pincode");
var th6 = tabeldata("th","scope","col","Gender");
var th7 = tabeldata("th","scope","col","State");
var th8 = tabeldata("th","scope","col","Country");
var tbody = tabel("tbody","class","tbody-dark");
var tr2 = tag("tr");
var td1 = document.createElement("td");
td1.innerHTML=document.getElementById("firstname").value;
var td2 = document.createElement("td");
td1.innerHTML=document.getElementById("middlename").value;
var td3 = document.createElement("td");
td1.innerHTML=document.getElementById("lastname").value;
var td4 = document.createElement("td");
td1.innerHTML=document.getElementById("address").value;
var td5 = document.createElement("td");
td1.innerHTML=document.getElementById("pincode").value;
var td6 = document.createElement("td");
td1.innerHTML=document.getElementById("gender").value;
var td7 = document.createElement("td");
td1.innerHTML=document.getElementById("state").value;
var td8 = document.createElement("td");
td1.innerHTML=document.getElementById("country").value;



tabel1.append(thead);
tabel1.append(tbody);
thead.append(tr1);
tr1.append(th1);
tr1.append(th2);
tr1.append(th3);
tr1.append(th4);
tr1.append(th5);
tr1.append(th6);
tr1.append(th7);
tr1.append(th8);
tbody.append(tr2);
tr2.append(td1);
tr2.append(td2);
tr2.append(td3);
tr2.append(td4);
tr2.append(td5);
tr2.append(td6);
tr2.append(td7);
tr2.append(td8);

document.body.append(tabel1);


