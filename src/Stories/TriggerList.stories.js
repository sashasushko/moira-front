// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TriggerList from '../Components/TriggerList/TriggerList';
import StoryRouter from 'storybook-router';

const items = [
    {
        error_value: 25.0,
        sched: {
            endOffset: 1439,
            days: [
                { enabled: true, name: 'Mon' },
                { enabled: true, name: 'Tue' },
                { enabled: true, name: 'Wed' },
                { enabled: true, name: 'Thu' },
                { enabled: true, name: 'Fri' },
                { enabled: true, name: 'Sat' },
                { enabled: true, name: 'Sun' },
            ],
            startOffset: 0,
            tzOffset: -300,
        },
        name: 'Clusterconfig failed responses per minute',
        ttl_state: 'OK',
        id: '05cbc16b-0026-465e-ba26-14883995b63a',
        throttling: 0,
        last_check: {
            timestamp: 1499418163,
            event_timestamp: 1499418163,
            metrics: {
                NotFound: {
                    timestamp: 1495709021,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1495003060,
                    value: 3.0,
                },
                ServiceUnavailable: {
                    timestamp: 1495708481,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1495141059,
                },
                NotImplemented: {
                    timestamp: 1495708481,
                    state: 'OK',
                    suppressed: false,
                    event_timestamp: 1494999279,
                },
            },
            state: 'EXCEPTION',
            score: 100000,
            msg: 'Trigger evaluation exception',
        },
        patterns: ['KE-cloud.clusterconfig.requests.*.code.*'],
        is_simple_trigger: false,
        ttl: 600,
        warn_value: 10.0,
        expression: '',
        targets: [
            "sumSeriesWithWildcards(aliasByNode(exclude(exclude(KE-cloud.clusterconfig.requests.*.code.*, 'OK'), 'NotModified'), 5), 3)",
        ],
        tags: ['clusterconfig', 'KE.Infra.Cloud'],
    },
];

storiesOf('Trigger List', module).addDecorator(StoryRouter()).add('default', () => <TriggerList items={items} />);
