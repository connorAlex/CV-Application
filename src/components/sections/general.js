import React, {Component} from 'react';

class General extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        const { onChange } = this.props;

        return (
            <div>
                <form id="generalExp">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        id="name"
                        name="name"
                        placeholder='Name'
                        onChange={onChange}
                    />
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        onChange={onChange}
                    />
                    <label htmlFor="phoneNum">Phone Number</label>
                    <input 
                        type="tel"
                        id="phoneNum"
                        name="phoneNum"
                        pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                        onChange={onChange}
                    />
                    <button type="submit">Submit</button>
                </form>

            </div>
        );
    };
}

export default General;