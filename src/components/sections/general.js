import React, {Component} from 'react';

class General extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <form>
                    <label for="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                    />
                    <label for="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                    />
                    <label for="phoneNum">Phone Number</label>
                    <input 
                        type="tel"
                        id="phoneNum"
                        name="phoneNum"
                        pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                    />
                </form>

            </div>
        );
    };
}

export default General;