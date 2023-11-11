import React from 'react';

const PersonForm = props => {
    return (
        <div>
            <form onSubmit={props.onSubmit}>
                <div>
                name: <input onChange={props.handleNameChange} />
                </div>
                <div>
                number: <input onChange={props.handleNumberChange}/>
                </div>
                <div>
                <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

export default PersonForm;