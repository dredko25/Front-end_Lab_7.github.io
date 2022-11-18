import React from 'react';
import ImgPhoto from './Дніпро.jpg';

export default function Image() {
    return(
        <div className='container'>
            <div class="block_photo">
            <img src={ImgPhoto} id="_image" alt="Дніпро" title="Дніпро"></img><br></br>
        </div> 
        <div class="buttons">
            <button id="_add">Додати</button>
            <button id="_increase">Збiльшити</button>
            <button id="_reduce">Зменшити</button>
            <button id="_remove">Видалити</button>
        </div> 
        </div>
    );
}