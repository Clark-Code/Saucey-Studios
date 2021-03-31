import React, { Fragment } from 'react';
import home1 from '../img/home1.png';


const HomeSection = () => {
    return (
        <Fragment>
        <div>
            <div className='description'>
                <div className="title">
                    <div className="hide">
                        <h2>we work to make</h2>
                    </div>
                </div>
                <div className="title">
                    <div className="hide">
                        <h2>your <span>dreams</span></h2>
                    </div>
                </div>
                <div className="title">
                    <div className="hide">
                        <h2>come true.</h2>
                    </div>
                </div>
            </div>
            <p>contact us about any photography or videography ideas that you have</p>
            <button>contact us</button>
        </div>
        
        <div className="image">
            <img src={home1} alt="guy with camera"/>
        </div>
        </Fragment>       
    )
}



export default HomeSection;