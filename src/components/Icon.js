import React, { Fragment } from 'react';

const Icon = ({ icon = 'ellipsis-h', text = false }) => ( // if a text prop exists, span will be rendered//
    <Fragment>
        <span className={`fas fa-${icon}`} />
        {Boolean(text) && <span> &nbsp; {text}</span>}
    </Fragment>
);

export default Icon;