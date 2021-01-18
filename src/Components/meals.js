import React from 'react'

const mealsData=[{
    imageUrl:"resources/img/1.jpg",
    imageAlt:"Korean bibimbap with egg and vegetables"
},{
    imageUrl:"resources/img/2.jpg",
    imageAlt:"Simple italian pizza with cherry tomatoes"
},{
    imageUrl:"resources/img/3.jpg",
    imageAlt:"Chicken breast steak with vegetables"
},{
    imageUrl:"resources/img/4.jpg",
    imageAlt:"Autumn pumpkin soup"
},{
    imageUrl:"resources/img/5.jpg",
    imageAlt:"Paleo beef steak with vegetables"
},{
    imageUrl:"resources/img/6.jpg",
    imageAlt:"Healthy baguette with egg and vegetables"
},
{
    imageUrl:"resources/img/7.jpg",
    imageAlt:"Burger with cheddar and bacon"
},
{
    imageUrl:"resources/img/8.jpg",
    imageAlt:"Granola with cherries and strawberries"
}]

export default function meals() {
    return (
        <section className="section-meals">
            <ul className="meals-showcase clearfix">

            </ul>
            <ul className="meals-showcase clearfix">

                {mealsData.map((image,index)=>(
                    <li key={index}>
                    <figure className="meal-photo">
                        <img src={image.imageUrl} alt={image.imageAlt}/>
                    </figure>
                </li>
                ))}
            </ul>
        </section>
    )
}