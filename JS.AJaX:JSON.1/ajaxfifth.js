"use strict";
import {Ajax} from "./modules/Ajax.js";

// save keystrokes
const $ = function (foo) {
    return document.getElementById(foo);    
}

/*
 * Event handler for fortune button - tests responseText
 */
let getNewContent = function() {
    let req = Object.create(Ajax);
    req.init();
    req.getFile("students.json", txtHandler);
}

/*
 * readystatechange/load event handler 
 * aka callback function
 * for the above AJaX
 */
let txtHandler = function(e) {
    /* ajax load event
     * puts received text 
     * onto the dom 
     * into the dom
     */

    let obj = JSON.parse(e.target.responseText);    // objectify response
                                                    // and use it
    let table = document.createElement("table");
    let name = document.createTextNode("Navn");
    let email = document.createTextNode("E-mail");
    let birth = document.createTextNode("Fødselsdag");
    let th = document.createElement("th");
    let th2 = document.createElement("th");
    let th3 = document.createElement("th");
    let cell = document.createElement("tr");

    th.appendChild(name);
    th2.appendChild(email);
    th3.appendChild(birth);
    cell.appendChild(th);
    cell.appendChild(th2);
    cell.appendChild(th3);
    table.appendChild(cell);
    $("new").appendChild(table);


    
    for (var i = 0; i < obj.length; i++) {
        let txt = document.createTextNode(`${obj[i].fName} ${obj[i].lName}`);
        let txt2 = document.createTextNode(`${obj[i].email}`);
        let txt3 = document.createTextNode(`${obj[i].birthday}`);

        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let cell2 = document.createElement("td");
        let cell3 = document.createElement("td");

        cell.appendChild(txt);
        cell2.appendChild(txt2);
        cell3.appendChild(txt3);
        row.appendChild(cell);
        row.appendChild(cell2);
        row.appendChild(cell3);
        table.appendChild(row);
        $("new").appendChild(table);
    }
}

/*
 *  Listen to the button
 */
let showStarter = function () {
    $("fortune").addEventListener("click", getNewContent);
}

window.addEventListener("load", showStarter); 