import React from 'react'

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            newsletterStatus:true,
            postSuccess:false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            newsletterStatus:!this.state.newsletterStatus
        })
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState({
            postSuccess:true
        })
    }

render(){
    return (
        <section className="section-form">
        <div className="row">
            <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
            <form method="post" action="#" onSubmit={this.handleSubmit} className="contact-form">
                <div className="row">
                    <div className="col span-1-of-3">
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="text" name="name" id="name" placeholder="Your name" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="email" name="email" id="email" placeholder="Your email" required/>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label htmlFor="find-us">How did you find us?</label>
                    </div>
                    <div className="col span-2-of-3">
                        <select name="find-us" id="find-us">
                            <option value="friends" >Friends</option>
                            <option value="search">Search engine</option>
                            <option value="ad">Advertisement</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Newsletter?</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="checkbox" name="news" id="news" checked={this.state.newsletterStatus} onChange={this.handleChange}/> Yes, please
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>Drop us a line</label>
                    </div>
                    <div className="col span-2-of-3">
                        <textarea name="message" placeholder="Your message"></textarea>
                    </div>
                </div>
                <div className="row">
                    <div className="col span-1-of-3">
                        <label>&nbsp;</label>
                    </div>
                    <div className="col span-2-of-3">
                        <input type="submit" value="Send it!"/>
                    </div>
                </div>
                <div><h3>{this.state.postSuccess?"Thank You":""}</h3></div>
            </form>
        </div>
    </section>
    )
}
}

export default Form;