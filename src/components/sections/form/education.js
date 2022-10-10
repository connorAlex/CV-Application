import React from 'react';

const Education = ({info, onChange, onSubmit}) => {

    return (
        
        <div className = "education">
            <form id="educationExp" onSubmit={onSubmit} autoComplete='off'>
                <div>Education</div>
                <div>
                    <label htmlFor='school'>School</label>
                    <input
                        type="text"
                        id="school"
                        name='school'
                        value={info.school}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="degree">Degree</label>
                    <input
                        type="text"
                        id="degree"
                        name="degree"
                        value={info.degree}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="degreeType">Degree Type</label>
                    <input
                        type="text"
                        id="degreeType"
                        name="degreeType"
                        value={info.degreeType}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor="major">Major</label>
                    <input
                        type="text"
                        id="major"
                        name='major'
                        value={info.major}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor='startDate'>Start Date</label>
                    <input
                        type="text"
                        name='startDate'
                        id="startDate"
                        value={info.startDate}
                        onChange={onChange}
                    />
                </div>
                <div>
                    <label htmlFor='gradDate'>Graduation Date</label>
                    <input
                        type="text"
                        id="gradDate"
                        name='gradDate'
                        value={info.gradDate}
                        onChange={onChange}
                    />
                </div>
                <button type="submit">Add</button>
            </form>
        </div>
    );
};


export default Education;