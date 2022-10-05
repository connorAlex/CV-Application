import React, {Component} from 'react';

class Footer extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='footer'>
                <div>Created by <a target="_blank" rel="noopener noreferrer" href = "https://github.com/connorAlex">Connor Cochrane</a></div>
                <div>This project is a subset of The Odin Project's curriculum</div>
            </div>
        );
    };
}

export default Footer;