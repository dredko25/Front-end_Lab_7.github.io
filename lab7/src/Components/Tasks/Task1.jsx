import React from 'react';

export default function Task1(){
    const elem1 = document.getElementById('el1');
    elem1.onclick = function () {
    if(this.style.backgroundColor === "rgb(0, 0, 255)"){
        this.style.backgroundColor = "#FFFF00"; //yellow
        this.style.color = "#000000";
    }
    else{
        this.style.backgroundColor = "#0000FF"; //blue
        this.style.color = "#FFFFFF";
    }
    };
    const elem2 = document.querySelector("#el2");
    elem2.onclick = function () {
    if(this.style.backgroundColor === "rgb(0, 0, 255)"){
        this.style.backgroundColor = "#FFFF00"; //yellow
        this.style.color = "#000000";
    }
    else{
        this.style.backgroundColor = "#0000FF"; //blue
        this.style.color = "#FFFFFF";
    }
    };
}
