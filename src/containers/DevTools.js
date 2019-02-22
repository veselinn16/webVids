import React from 'react'; // for the JSX
import { createDevTools } from 'redux-devtools'; // returns a component, which has an instrument property used for adding DevTools to the store
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';

export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-m' changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
)