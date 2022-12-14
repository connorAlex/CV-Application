import React from 'react';

function General({onChange}) {
    
    
    
    return (
        <div className = "general">
            <form id="generalExp" autoComplete='off'>
                <div>Personal</div>
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
                    <label htmlFor="location">Location</label>
                    <input
                        type="location"
                        id="location"
                        name="location"
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}'
                        onChange={onChange}
                    />
                </div>
            </form>
        
        </div>
    );
};

export default General;