// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { States } from '../Domain/State';
import StateIndicator from '../Components/StateIndicator/StateIndicator';

storiesOf('State Indicator', module)
    .add('OK', () => <StateIndicator states={[States.OK]} />)
    .add('NODATA', () => <StateIndicator states={[States.NODATA]} />)
    .add('WARNING', () => <StateIndicator states={[States.WARNING]} />)
    .add('ERROR', () => <StateIndicator states={[States.ERROR]} />)
    .add('NODATA & WARNING', () => <StateIndicator states={[States.NODATA, States.WARNING]} />)
    .add('NODATA & ERROR', () => <StateIndicator states={[States.NODATA, States.ERROR]} />)
    .add('WARNING & ERROR', () => <StateIndicator states={[States.WARNING, States.ERROR]} />)
    .add('NODATA & WARNING & ERROR', () => <StateIndicator states={[States.NODATA, States.WARNING, States.ERROR]} />);
