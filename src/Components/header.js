import React from 'react'

export default function header() {
    return (
            <header>
                <nav>
                    <div className="row">
                        <img src="../../public/resources/img/logo.png" alt="TorontoEats logo" className="logo"/>
                        <ul className="main-nav js--main-nav">
                            <li><a href="#features">Food delivery</a></li>
                            <li><a href="#works">How it works</a></li>
                            <li><a href="#cities">Our areas</a></li>
                            <li><a href="#plans">Sign up</a></li>
                        </ul>
                        <a  href="/#" className="mobile-nav-icon js--nav-icon"><i className="ion-navicon-round"></i></a>
                    </div>
                </nav>
            <div className="hero-text-box">
                <h1>Let nobody sleep hungry tonight.<br/>Donate meals today.</h1>
                <a className="btn btn-full js--scroll-to-plans" href="/#">Donate now</a>
                <a className="btn btn-ghost js--scroll-to-start" href="/#">The spirit of Canada</a>
            </div>
            </header>
    )
}
