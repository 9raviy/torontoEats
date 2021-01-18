import React from 'react'

const plansData=[{
    category:"Premium",
    planPrice:"$399",
    planPriceMeal:"That's only 13.30$ per meal",
    attributes:["1 meal every day","Order 24/7","Access to newest creations","Free delivery"],
    highlightButton:true
},
{
    category:"Pro",
    planPrice:"$149",
    planPriceMeal:"That's only 14.90$ per meal",
    attributes:["1 meal 10 days/month","Order 24/7","Access to newest creations","Free delivery"],
    highlightButton:false
},
{
    category:"Starter",
    planPrice:"$19",
    planPriceMeal:"Single meal",
    attributes:["1 meal","Order from 8 am to 12 pm","Limited access","Free delivery"],
    highlightButton:false
}]

export default function plans() {
    return (
        <section className="section-plans js--section-plans" id="plans">
        <div className="row">
            <h2>Start eating healthy today</h2>
        </div>
        <div className="row">
                {plansData.map((plan,index)=>(
                    <div key={index} className="col span-1-of-3">
                    <div className="plan-box">
                        <div>
                            <h3>{plan.category}</h3>
                            <p className="plan-price">{plan.planPrice} <span>/ month</span></p>
                            <p className="plan-price-meal">{plan.planPriceMeal} </p>
                        </div>
                        <div>
                            <ul>
                                {plan.attributes.map((item, index)=>(
                                    <li key={index}><i className="ion-ios-checkmark-empty icon-small"></i>{item}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <a href="/#" className={plan.highlightButton?"btn btn-full":"btn btn-ghost"}>Sign up now</a>
                        </div>
                    </div>
                </div>
                ))}
        </div>
    </section>
    )
}