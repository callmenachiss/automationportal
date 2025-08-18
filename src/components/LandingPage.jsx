import './LandingPage.css';
import React from 'react'
import { Typewriter } from "react-simple-typewriter";
import paint from '../assets/paint.jpg';
import line from '../assets/line.webp';

import TCS from '../assets/tcs.png';
import ZOHO from '../assets/zoho.png';
import CTS from '../assets/CTS.png';
import GAVS from '../assets/gavs.jpg';

const LandingPage = () => {
    return (
        <>
            <div className="lineimage">
                <img src={line} alt="Paints" height="100" width="200" />
            </div>
            <header>
                <div className="paintimage">
                    <img src={paint} alt="Paint" />
                </div>

                <div className='headercontainer'>
                    <h3>Coding Ninja</h3>
                </div>
                <div className="navbar">
                    <ul>
                        <li><a href="/">Bootcamp</a></li>
                        <li><a href="/">Courses</a></li>
                        <li><a href="/">Contact Us</a></li>
                        <li><a href="/">Make a Payment</a></li>
                    </ul>
                    <button className='login'>Login</button>
                </div>
            </header>



            <div className="smallbox">

            </div>

            <div className="typingcontainer">
                <h1>Helping you to become an outstanding</h1><br />
            </div>
            <div className="typocontainer">
                <h1>by Making Tech {" "}
                    <span style={{ color: "#3b82f6" }}>
                        <Typewriter
                            words={["Simple", "Unforgettable"]}
                            loop={true}
                            cursor
                            cursorStyle="|"
                            cursorColor="black"
                            typeSpeed={80}
                            deleteSpeed={50}
                            delaySpeed={1500}
                        />
                    </span>
                </h1>
            </div>

            <div class="stats-container">
                <div class="stat-box">
                    <h2>3200+</h2>
                    <p>Impact on student</p>
                </div>
                <div class="stat-box">
                    <h2>1.5M+</h2>
                    <p>Digitally Reached</p>
                </div>
                <div class="stat-box">
                    <h2>4M+</h2>
                    <p>Viewers Globally</p>
                </div>
                <div class="stat-box">
                    <h2>15LPA</h2>
                    <p>Highest CTC</p>
                </div>
            </div>
            <div class="shapes-container">
                <div class="pentagon">Buy me a coffee</div>
            </div>
            <div className="companycontainer">
                <div> <h5>Where do our students work? </h5></div>
                <div className="roundedcontainer">
                    <img src={CTS} alt="Paints" height="80" width="180" />
                    <img src={TCS} alt="Paints" height="100" width="200" />
                    <img src={ZOHO} alt="Paints" height="100" width="200" />
                    <img src={GAVS} alt="Paints" height="100" width="200" />
                </div>
            </div>

            <div className="whyuscontainer">
                <h1>Why We're the Best Choice for</h1><br />
            </div>
             <div className="learningcontainer">
                <h1>Your Learning</h1>
            </div>

            <div class="points-container">
                <div class="point-box">
                    <h2>Simplified Teaching</h2>
                    <p>90% of our students love our easy-to-understand teaching methods</p>
                </div>
                <div class="point-box">
                    <h2>24/7 Doubt Support</h2>
                    <p>Get your doubts cleared anytime through various channels</p>
                </div>
                <div class="point-box">
                    <h2>Expert Mentors</h2>
                    <p>Learn from experts who've worked at top companies like Zoho, CTS , TCS and GAVS </p>
                </div>
                <div class="point-box">
                    <h2>Placement Support</h2>
                    <p>Our programs include mock interviews, internships and live projects & supports</p>
                </div>
            </div>

            <footer>
                <div className="footercontainer">
                    <h3>© 2023 Coding Ninja. All rights reserved.</h3>
                    <div className="footerlinks">
                        <a href="/">Privacy Policy</a>
                        <a href="/">Contact Us</a>
                    </div>
                </div>
            </footer>

        </>




    )
}

export default LandingPage