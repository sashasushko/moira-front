// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-router';
import TriggerCurrentState from '../Components/TriggerCurrentState/TriggerCurrentState';

const data = {
    metrics: {
        'KE.system-kamchatka.allServers.k0ch1.volumes.c.freemegabytes': {
            timestamp: 1499748981,
            state: 'NODATA',
            suppressed: false,
            event_timestamp: 1499664203,
        },
        'KE.system-kamchatka.allServers.vm-wst.volumes.c.freemegabytes': {
            timestamp: 1499748981,
            state: 'NODATA',
            suppressed: false,
            event_timestamp: 1499664203,
        },
        'KE.system-kamchatka.allServers.vm-keweb1.volumes.c.freemegabytes': {
            timestamp: 1499748981,
            state: 'NODATA',
            suppressed: false,
            event_timestamp: 1499664203,
        },
        'KE.system-kamchatka.allServers.vm-keweb2.volumes.c.freemegabytes': {
            timestamp: 1499748981,
            state: 'NODATA',
            suppressed: false,
            event_timestamp: 1499664203,
        },
        'KE.system-kamchatka.allServers.k0ch3.volumes.c.freemegabytes': {
            timestamp: 1499748981,
            state: 'NODATA',
            suppressed: false,
            event_timestamp: 1499664203,
        },
    },
    timestamp: 1499749639,
    state: 'OK',
    score: 28000,
    trigger_id: 'e8304401-718e-4a73-8d13-e9abe4c91d69',
};

storiesOf('TriggerStateCurrent', module)
    .addDecorator(StoryRouter())
    .add('default', () => <TriggerCurrentState data={data} />);
