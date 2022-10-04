import React, {Component} from 'react';

class General extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {

        const { onChange } = this.props;

        return (
            <div className = "general">
                <form id="generalExp">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            onChange={onChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNum">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNum"
                            name="phoneNum"
                            pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                            onChange={onChange}
                        />
                    </div>
                </form>

            </div>
        );
    };
}

export default General;