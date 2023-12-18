import React from 'react'
import './Homepage.css'
import Navbar from '../component/Navbar'
import amazon from '../images/amazon.png'
import apple from '../images/apple.png'
import google from '../images/google.jpeg'
import microsoft from '../images/microsoft.png'
import spotify from '../images/spotify.png'
function Homepage() {
    return (
        <>
            <Navbar></Navbar>
            <div className="homepage">
                <div className="content">
                    <div className="tagline">
                        <h3>Learn to code - for free.</h3>
                        <h3>Build projects.</h3>
                        <h3>Earn certification.</h3>
                    </div>
                    <div className="graduates">
                        <p>Since 2014, more than 40,000 freeCodeCamp.org graduates have gotten</p>
                        <p> jobs at tech companies including:</p>
                    </div>

                    <div className="logos">
                        <img src={apple} style={{ height: '40px', width: 'auto' }} alt="Apple" />
                        <img src={google} alt="Google" />
                        <img src={microsoft} alt="Microsoft" />
                        <img src={spotify} alt="Spotify" />
                        <img src={amazon} alt="Amazon" />
                    </div>
                    <div className="get-started">
                        <button>Get Started (it's free)</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage