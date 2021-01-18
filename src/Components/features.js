import React from 'react'

const featureData=[{
    iconName:"ion-ios-stopwatch-outline icon-big",
    heading:"Ready in 20 minutes",
    description:"We are only twenty minutes away with a delicious and super healthy meals delivered right where you need. We work with some of the most generous chefs in Toronto who prepare healthy meals."
    },
    {iconName:"ion-ios-infinite-outline icon-big",
    heading:"Up to 365 days/year",
    description:"Should you choose, we provide a 365 days/year plan and would deliver food to anyone you choose, every single day. You can also choose to order more flexibly if that's your style."
    },
    {iconName:"ion-ios-nutrition-outline icon-big",
    heading:"100% organic",
    description:"All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!"
    },
    {iconName:"ion-ios-cart-outline icon-big",
    heading:"Order anything",
    description:"We don't limit your creativity, which means you can order whatever you feel like. You can also choose from our menu containing over 100 delicious meals. It's up to you!"
    }]

export default function features() {
    return (
        <section className="section-features js--section-features" id="features">
        <div className="row">
            <h2>Celebrate Canadian-ness &mdash; donate food today</h2>
            <p className="long-copy">
                Hello, we're TorontoEats, an instant food delivery service to those who need. We know you want to help. We provide a platform to donate meals to the homeless and shelterless in Toronto.
            </p>
        </div>
        
        <div className="row js--wp-1">
            {featureData.map((feature,index)=>(
                <div key={index} className="col span-1-of-4 box">
                <i className={feature.iconName}></i>
                <h3>{feature.heading}</h3>
                <p>
                    {feature.description}
                </p>
            </div>
            ))}
        </div>   
    </section>
    )
}