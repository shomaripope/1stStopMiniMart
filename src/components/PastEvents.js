import React, { Component } from 'react';
import pastPic from '../images/IMG950496.jpg';
import pastPic2 from '../images/IMG950567.jpg';
import pastPic3 from '../images/IMG950497.jpg';
import pastPic4 from '../images/IMG950494.jpg';

class PastEvents extends Component {
    render() {
        return (
            <div>
                <div className="col s12 m7">
                    <h2 className="header">Event Title</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img src={pastPic} alt="past event pic" />
                        </div>
                    </div>
                </div>

                <div className="col s12 m7">
                    <h2 className="header">Event Title</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img src={pastPic2} alt="Event Title" />
                        </div>
                    </div>
                </div>

                <div className="col s12 m7">
                    <h2 className="header">Event Title</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img src={pastPic3} alt="Event Title" />
                        </div>
                    </div>
                </div>

                <div className="col s12 m7">
                    <h2 className="header">Event Title</h2>
                    <div className="card horizontal">
                        <div className="card-image">
                        <img src={pastPic4} alt="Event Title" />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default PastEvents;