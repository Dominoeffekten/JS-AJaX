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
    req.getFile("examplejson2g.json", txtHandler);
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
    
    for (var i = 0; i < obj.length; i++) {
        let txt = document.createTextNode(`${obj[i].name}`);
        let txt2 = document.createTextNode(`${obj[i].population}`);

        let row = document.createElement("tr");
        let cell = document.createElement("td");
        let cell2 = document.createElement("td");

        cell.appendChild(txt);
        cell2.appendChild(txt2);
        row.appendChild(cell);
        row.appendChild(cell2);
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