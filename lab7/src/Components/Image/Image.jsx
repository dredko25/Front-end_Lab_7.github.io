import React from 'react';

export default function Image() {
    function Add(){
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
    };
    function Increase(){
        let size = getComputedStyle(document.querySelector("#_image"));
        let sizeH = parseInt(size.height);
        console.log(sizeH);
        sizeH += 50;
        document.querySelector("#_image").style.height = sizeH + "px";
    }
    function Reduce (){
        let size = getComputedStyle(document.querySelector("#_image"));
        let sizeH = parseInt(size.height);
        sizeH -= 50;
        document.querySelector("#_image").style.height = sizeH + "px";
    }
    function Remove (){
        let remove_EL = document.querySelector("div.block_photo img");
        let remove_BR = document.querySelector("div.block_photo br");
        remove_EL.remove();
        remove_BR.remove();
    }
    return(
        <div className='container'>
            <div class="buttons">
                <button id="_add" onClick={Add}>Додати</button>
                <button id="_increase" onClick={Increase}>Збiльшити</button>
                <button id="_reduce" onClick={Reduce}>Зменшити</button>
                <button id="_remove" onClick={Remove}>Видалити</button>
            </div> 
        </div>
    );
}