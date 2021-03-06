import React from "react"
import { Link } from "gatsby"

/*import './elements.scss'*/
import SEO from "../components/seo"
import Layout from "../components/layout"
import EmailForm from "../components/emailForm"

const ElementsPage = () => (
    <Layout>
        <SEO title="Elements" />
        <div className="Elements Hero">
            <div className="HeroGroup">
                <h1>Elements</h1>
                <p>React components library for this project</p>
            </div>
        </div>
        <div className="Container">
            <h1>Typography</h1>
            <div className="Group">
                <h1>Heading 1</h1>
                <h2>Heading 2</h2>
                <h3>Heading 3</h3>
                <h4>Heading 4</h4>
                <p>Body</p>
                <p className="Caption">Caption</p>
            </div>
            <div className="Group">
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Donec id elit non mi porta gravida at eget metus. Donec id elit non mi porta gravida at eget metus. Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id elit non mi porta gravida at eget metus. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur.</p>
            </div>
        </div>

        <div className="Container">
            <h1>Buttons</h1>
            <div className="Group">
                <p>Primary</p>
                <Link className="btn btn-Primary" to="/page-2/">Action</Link>
            </div>
            <div className="Group">
                <p>Primary Ghost</p>
                <Link className="btn btn-PrimaryGhost" to="/page-2/">Action</Link>
            </div>
            <div className="Group">
                <p>Secondary</p>
                <Link className="btn btn-Secondary" to="/page-2/">Action</Link>
            </div>
            <div className="Group">
                <p>Secondary Ghost</p>
                <Link className="btn btn-SecondaryGhost" to="/page-2/">Action</Link>
            </div>
            <div className="Group">
                <p>Primary Alt</p>
                <Link className="btn btn-PrimaryAlt" to="/page-2/">Action</Link>
            </div>
            <div className="Group">
                <p>Dark</p>
                <Link className="btn btn-Dark" to="/page-2/">Action</Link>
            </div>
        </div>

        <div className="Container">
            <h1>Badges</h1>
            <div className="Group">
                <p>Primary</p>
                <a className="badge badge-Primary Caption" to="/page-2/">Label</a>
            </div>
            <div className="Group">
                <p>Primary Light</p>
                <a className="badge badge-PrimaryLight Caption" to="/page-2/">Label</a>
            </div>
            <div className="Group">
                <p>Secondary</p>
                <a className="badge badge-Secondary Caption" to="/page-2/">Label</a>
            </div>
            <div className="Group">
                <p>Secondary Light</p>
                <a className="badge badge-SecondaryLight Caption" to="/page-2/">Label</a>
            </div>
        </div>
    
        <div className="Container">
            <h1>Links</h1>
            <div className="Group">
                <p>Text</p>
                <Link className="btn-Text" to="/page-2/">Action</Link>
            </div>
        </div>

        <div className="Container">
            <h1>Form</h1>
            <div className="Group">
                <p>Basic Input</p>
                <input placeholder="Basic Input" type="text" />
            </div>
            <div className="Group">
                <p>Input with Button</p> 
                <EmailForm
                    placeholder="Email address"
                    buttoncta="Sign up"
                />
            </div>
            <div className="Group">
                <p>Basic Input with Label</p>
                <label>Label</label>
                <input placeholder="Basic Input" type="text" />
            </div>
        </div>

        <div className="Container">
            <h1>Card</h1>
            <div className="Group">
            <p>Basic Card</p>
                <div className="Card">
                    <div className="CardContent">
                        <p className="Caption">Caption</p>
                        <h2>Card Title</h2>
                        <p>Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.</p>
                        <Link className="btn btn-PrimaryGhost" to="/page-2/">Action</Link>
                    </div>
                </div>
            </div>
            <div className="Group">
            <p>Card with Image</p>
                <div className="Card">
                    <img className="CardImage" src={require('../images/Mentoring v2.jpg')} />
                    <div className="CardContent">
                        <p className="Caption">Caption</p>
                        <h2>Card Title</h2>
                        <p>Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus.</p>
                        <Link className="btn btn-PrimaryGhost" to="/page-2/">Action</Link>
                    </div>
                </div>
            </div>
        </div>

    </Layout>
        )
        
  export default ElementsPage