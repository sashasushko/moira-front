// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { States } from '../Domain/State';
import StateIndicator from '../Components/StateIndicator/StateIndicator';

storiesOf('State Indicator', module)
    .add('OK', () => <StateIndicator state={[States.OK]} />)
    .add('NODATA', () => <StateIndicator state={[States.NODATA]} />)
    .add('WARNING', () => <StateIndicator state={[States.WARNING]} />)
    .add('ERROR', () => <StateIndicator state={[States.ERROR]} />)
    .add('NODATA & WARNING', () => <StateIndicator state={[States.NODATA, States.WARNING]} />)
    .add('NODATA & ERROR', () => <StateIndicator state={[States.NODATA, States.ERROR]} />)
    .add('WARNING & ERROR', () => <StateIndicator state={[States.WARNING, States.ERROR]} />)
    .add('NODATA & WARNING & ERROR', () => <StateIndicator state={[States.NODATA, States.WARNING, States.ERROR]} />);
