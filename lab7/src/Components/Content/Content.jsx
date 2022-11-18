import React, { Component } from 'react';
import ImgPhoto from './Дніпро.jpg';

export default class Content extends Component{
    ChangeBackgroundColor (el) {
        if(el.target.style.backgroundColor === "rgb(0, 0, 255)"){
            el.target.style.backgroundColor = "#FFFF00"; //yellow
            el.target.style.color = "#000000";
        }
        else{
            el.target.style.backgroundColor = "#0000FF"; //blue
            el.target.style.color = "#FFFFFF";
        }
    };
    render(){
        return(
            <>
            <div className='container'>
                <h3><b>Мої хобі</b></h3>
                <ul>
                    <li>Збирання пазлів</li>
                    <li>Приготування їжі</li>
                    <li>Читання</li>
                    <li>В'язання</li>
                    <li onClick={this.ChangeBackgroundColor}>Перегляд фільмів</li>
                </ul>
                <h3 onClick={this.ChangeBackgroundColor}><b>3 мої улюблені книги:</b></h3>
                <ol>
                    <li>"Вуличний кіт на ім'я Боб" Дж. Боуен</li>
                    <li>"О дивний новий світ" О. Хакслі</li>
                    <li>"Друге життя Уве" Ф. Бакман</li>
                </ol>
                <div class="city">
                    <div class="description">
                        <h7><i><b>Дніпро</b></i> – це провідний діловий, промисловий, науковий і культурний центр Південно-Східної України. У Дніпрі перебувають центральні офіси і регіональні філії майже 40 великих державних і приватних банків, багатьох страхових та інших вітчизняних і закордонних кампаній. Успішна зовнішньоекономічна діяльність пов’язує місто і область майже зі 130 країнами світу.  Місто має два залізничні вокзали, міжнародний аеропорт, річковий порт, два автовокзали. Дніпро – 4-й за чисельністю місто в Україні, в якому живе майже мільйон жителів. Набережна довжиною 23 км – улюблене місце прогулянок мешканців міста, а легендарний острів Монастирський – романтичний куточок мегаполісу. Старовинні споруди знаходяться в історичній частині міста – Жовтневій площі і в парку ім.  Шевченко: Преображенський собор і Потьомкінський палац. В околицях міста знаходяться три земельні фортеці, найвідоміша з яких польська фортеця Кодак, а також старовинне поселення лоцманів – Лоцманська Кам’янка.</h7>
                    </div>
                    <div class="photo">
                        <figure>
                            <img src={ImgPhoto} alt="Дніпро" height="320" title="Дніпро"></img>
                            <figcaption>Дніпро</figcaption>
                        </figure>
                    </div>
                </div>
                <div class="block_photo">
                    <img src={ImgPhoto} id="_image" alt="Дніпро" title="Дніпро"></img><br></br>
                </div>
            </div>
            </>
        );
    }
}