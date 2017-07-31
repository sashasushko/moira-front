// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Statuses } from '../Domain/State';
import StateIndicator from '../Components/StateIndicator/StateIndicator';

storiesOf('State Indicator', module)
    .add('OK', () => <StateIndicator states={[Statuses.OK]} />)
    .add('NODATA', () => <StateIndicator states={[Statuses.NODATA]} />)
    .add('WARNING', () => <StateIndicator states={[Statuses.WARNING]} />)
    .add('ERROR', () => <StateIndicator states={[Statuses.ERROR]} />)
    .add('NODATA & WARNING', () => <StateIndicator states={[Statuses.NODATA, Statuses.WARNING]} />)
    .add('NODATA & ERROR', () => <StateIndicator states={[Statuses.NODATA, Statuses.ERROR]} />)
    .add('WARNING & ERROR', () => <StateIndicator states={[Statuses.WARNING, Statuses.ERROR]} />)
    .add('NODATA & WARNING & ERROR', () =>
        <StateIndicator states={[Statuses.NODATA, Statuses.WARNING, Statuses.ERROR]} />
    );
