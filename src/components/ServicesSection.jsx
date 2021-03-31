import React, { Fragment } from 'react';
import clock from '../img/clock.svg';
import innovation from '../img/innovation.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';


const ServcieSection = () => {
    return (
        <Fragment>
            <div className="services">
                <div className="description">
                    <h2>High <span>quality</span> services</h2>
                    <div className="cards">
                        <div className="card">
                            <div className="icon">
                                <img src={clock} alt="clock"/>
                                <h3>Efficient</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={innovation} alt="innovation"/>
                                <h3>Innovation</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={money} alt="money"/>
                                <h3>Affordable</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={teamwork} alt="teamwork"/>
                                <h3>Teamwork</h3>
                            </div>
                            <p>Lorem ipsum dolor sit amet.</p>
                        </div>
                    </div>
                    <img src={home2} alt='camera'/>
                </div>
            </div>
        </Fragment>
    )

}

export default ServcieSection;