import React from 'react'

const citiesData=[{
    name:"Downtown",
    imageUrl:"../../resources/img/downtown.jpg",
    alt:"toronto downtown",
    eaters:"1600+ meals served",
    chefs:"6+ chefs",
    twitterId:"@downtown_TE"
},
{
    name:"Midtown",
    imageUrl:"../../resources/img/midtown.jpg",
    alt:"toronto midtown",
    eaters:"2100+ meals served",
    chefs:"10+ chefs",
    twitterId:"@midtown_TE"
},
{
    name:"North York",
    imageUrl:"../../resources/img/northyork.jpg",
    alt:"north york",
    eaters:"1200+ meals served",
    chefs:"5+ chefs",
    twitterId:"@northyork_TE"
},
{
    name:"Mississauga",
    imageUrl:"../../resources/img/missisauga.jpg",
    alt:"missisauga",
    eaters:"1500+ meals served",
    chefs:"10+ chefs",
    twitterId:"@missisauga_TE"
}]

export default function cities() {
    return (
        <section className="section-cities" id="cities">
            <div className="row">
                <h2>Areas we currently serve</h2>
            </div>
            <div className="row js--wp-3">
                {citiesData.map((city,index)=>(
                    <div key={index}>
                        <div className="col span-1-of-4 box">
                        <img src={city.imageUrl} alt={city.alt}/>
                        <h3>{city.name}</h3>
                        <div className="city-feature">
                            <i className="ion-ios-person icon-small"></i>
                            {city.eaters}
                        </div>
                        <div className="city-feature">
                            <i className="ion-ios-star icon-small"></i>
                            {city.chefs}
                        </div>
                        <div className="city-feature">
                            <i className="ion-social-twitter icon-small"></i>
                            <a href="/#">{city.twitterId}</a>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    )
}