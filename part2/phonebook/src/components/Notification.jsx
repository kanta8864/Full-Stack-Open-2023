import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({message, classSelector}) => {
    if (message == null) return null
    return (
        <div className={classSelector}>
            {message}
        </div>
    );
};

export default Notification;