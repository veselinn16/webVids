import React from 'react';

const Icon = ({ icon = 'ellipsis-h', text = false, onClick }) => ( // if a text prop exists, span will be rendered//
    <div onClick={onClick}>
        <span className={`fas fa-${icon}`} />
        {Boolean(text) && <span> &nbsp; {text}</span>}
    </div>
);

export default Icon;