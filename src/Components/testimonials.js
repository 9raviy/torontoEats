import React from 'react'

const quotes=[
    {quote:"TorontoEats is doing incredible work of focusing on providing healthy meals to the most vulnerable people of the society. I always wanted to help them but found no platform which could have provided such a valuable service to society!",
    author:"Alberto Duncan",
    imageUrl:"../../resources/img/customer-1.jpg"},
    {quote:"The true spirit of being a Canadian is to help those who need our help. Compassion in our hearts is what keeps our city beautiful and smiling. TorontoEats is an excellent initiative to let no one sleep hungry in our beloved city! ",
    author:"Joana Silva",
    imageUrl:"../../resources/img/customer-2.jpg"},
    {quote:"You guys are doing awesome work!! I hope this initiative rapidly scales to all over Canada. Everybody should have access to healthy meals. Thats the key to live a happy healthy life and become a contributing member of the society",
    author:"Milton Chapman",
    imageUrl:"../../resources/img/customer-3.jpg"}]

export default function testimonials() {
    return (
<section className="section-testimonials">
            <div className="row">
                <h2>What other Canadians say</h2>
            </div>
            <div className="row">
                {quotes.map((item,index)=> (
                    <div className="col span-1-of-3" key={index}>
                        <blockquote>
                            {item.quote}
                            <cite><img src={item.imageUrl} alt={`Customer ${index}`}/>{item.author}</cite>
                        </blockquote>
                    </div>
                )
                    )
                }
            </div>
        </section>
    )
}