import Raect from 'react';

export default function Task2(){
    const photo = document.querySelector("#_image");
    document.getElementById("_add").onclick = function (){
        const block_of_photo = document.querySelector(".block_photo");
        const photoPLUS = document.createElement("img");
        let link = prompt("Insert image link:");
        if(link != null){
            photoPLUS.src = link;
        }
        const enter = document.createElement("br");
        block_of_photo.append(photoPLUS);
        block_of_photo.append(enter);
        console.log(document.body);
    }
    document.getElementById("_increase").onclick = function (){
        let size = getComputedStyle(photo);
        let sizeH = parseInt(size.height);
        console.log(sizeH);
        sizeH += 50;
        photo.style.height = sizeH + "px";
    }
    document.getElementById("_reduce").onclick = function (){
        let size = getComputedStyle(photo);
        let sizeH = parseInt(size.height);
        sizeH -= 50;
        photo.style.height = sizeH + "px";
    }
    document.getElementById("_remove").onclick = function (){
        let remove_EL = document.querySelector("div.block_photo img");
        let remove_BR = document.querySelector("div.block_photo br");
        remove_EL.remove();
        remove_BR.remove();
    }
}