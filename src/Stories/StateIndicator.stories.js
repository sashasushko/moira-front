// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Statuses } from '../Domain/Status';
import StatusIndicator from '../Components/StatusIndicator/StatusIndicator';

storiesOf('State Indicator', module)
    .add('OK', () => <StatusIndicator statuses={[Statuses.OK]} />)
    .add('NODATA', () => <StatusIndicator statuses={[Statuses.NODATA]} />)
    .add('WARNING', () => <StatusIndicator statuses={[Statuses.WARNING]} />)
    .add('ERROR', () => <StatusIndicator statuses={[Statuses.ERROR]} />)
    .add('NODATA & WARNING', () => <StatusIndicator statuses={[Statuses.NODATA, Statuses.WARNING]} />)
    .add('NODATA & ERROR', () => <StatusIndicator statuses={[Statuses.NODATA, Statuses.ERROR]} />)
    .add('WARNING & ERROR', () => <StatusIndicator statuses={[Statuses.WARNING, Statuses.ERROR]} />)
    .add('NODATA & WARNING & ERROR', () =>
        <StatusIndicator statuses={[Statuses.NODATA, Statuses.WARNING, Statuses.ERROR]} />
    );
