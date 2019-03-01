import React from 'react';
import Icon from './Icon';
import { helpMsg } from '../constants/toasts';

const HelpMenu = ({ showToast }) => (
    <Icon
        icon='bars'
        text='help'
        onClick={showToast.bind(null, 'success', helpMsg)}
    />
);

export default HelpMenu;