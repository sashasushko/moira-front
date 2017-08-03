// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TriggerFilter from '../Components/TriggerFilter/TriggerFilter';

const remainedTags = ['abonentsErrors', 'dmitry:ReplicaClusterError.ReplicaClusterWarn', 'build'];
const selectedTags = ['test', 'dev'];

storiesOf('TriggerFilter', module)
    .add('Default', () =>
        <TriggerFilter remainedTags={remainedTags} onSelect={action('onSelect')} onRemove={action('onRemove')} />
    )
    .add('With selected tags', () =>
        <TriggerFilter
            remainedTags={remainedTags}
            selectedTags={selectedTags}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
        />
    )
    .add('With checked "Only problems"', () =>
        <TriggerFilter
            remainedTags={remainedTags}
            onSelect={action('onSelect')}
            onRemove={action('onRemove')}
            notOkMetrics
        />
    );
